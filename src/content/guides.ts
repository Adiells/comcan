import { z } from 'zod'
import { ROTULO_CATEGORIA } from '../lib/rotulos'
import { guideSchema, type Canal, type Categoria, type Guide } from './schema'

const modules = import.meta.glob('./guides/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, unknown>

function carregarGuias(): Guide[] {
  const guias: Guide[] = []

  for (const [caminho, bruto] of Object.entries(modules)) {
    const arquivo = caminho.replace('./guides/', '').replace(/\.json$/, '')
    const resultado = guideSchema.safeParse(bruto)

    if (!resultado.success) {
      throw new Error(`Guia inválido em ${caminho}:\n${z.prettifyError(resultado.error)}`)
    }

    if (resultado.data.slug !== arquivo) {
      throw new Error(
        `Slug "${resultado.data.slug}" não corresponde ao arquivo ${caminho} (esperado "${arquivo}")`,
      )
    }

    guias.push(resultado.data)
  }

  return guias.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'))
}

/** Falha no carregamento do módulo se qualquer guia estiver fora do schema. */
export const guides = carregarGuias()

export function getGuide(slug: string | undefined): Guide | undefined {
  return guides.find((guia) => guia.slug === slug)
}

export function getCategorias(): { categoria: Categoria; total: number }[] {
  const totais = new Map<Categoria, number>()
  for (const guia of guides) {
    totais.set(guia.categoria, (totais.get(guia.categoria) ?? 0) + 1)
  }
  return [...totais.entries()]
    .map(([categoria, total]) => ({ categoria, total }))
    .sort((a, b) => b.total - a.total || a.categoria.localeCompare(b.categoria, 'pt-BR'))
}

/** Normalização diacrítica NFD para busca sem acentos e minúscula. */
export function normalizar(texto: string): string {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

export interface FiltrosGuia {
  canal?: Canal | 'todos'
  categoria?: Categoria | 'todas'
}

export function filtrarGuias(termo: string, filtros?: FiltrosGuia): Guide[] {
  const buscaNormalizada = normalizar(termo.trim())
  const canalFiltro = filtros?.canal && filtros.canal !== 'todos' ? filtros.canal : null
  const categoriaFiltro =
    filtros?.categoria && filtros.categoria !== 'todas' ? filtros.categoria : null

  return guides.filter((guia) => {
    if (canalFiltro && !guia.canais.includes(canalFiltro as Canal)) {
      return false
    }

    if (categoriaFiltro && guia.categoria !== categoriaFiltro) {
      return false
    }

    if (!buscaNormalizada) {
      return true
    }

    const nomeNorm = normalizar(guia.nome)
    const categoriaNorm = normalizar(guia.categoria)
    const rotuloCatNorm = normalizar(ROTULO_CATEGORIA[guia.categoria] ?? '')
    const resumoNorm = normalizar(guia.resumo)

    return (
      nomeNorm.includes(buscaNormalizada) ||
      categoriaNorm.includes(buscaNormalizada) ||
      rotuloCatNorm.includes(buscaNormalizada) ||
      resumoNorm.includes(buscaNormalizada)
    )
  })
}
