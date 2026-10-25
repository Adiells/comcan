import type { Guide } from '../content/schema'
import { formatarData } from './rotulos'

export interface EstadoProtocolo {
  passosConcluidos: number[]
  protocolo: string
  notas: string
}

export function chaveStorage(slug: string): string {
  return `comcan:protocolo:${slug}`
}

export function carregarProtocolo(slug: string): EstadoProtocolo {
  try {
    const salvo = localStorage.getItem(chaveStorage(slug))
    if (!salvo) {
      return { passosConcluidos: [], protocolo: '', notas: '' }
    }
    const dados = JSON.parse(salvo)
    return {
      passosConcluidos: Array.isArray(dados.passosConcluidos)
        ? dados.passosConcluidos.filter((n: unknown) => typeof n === 'number')
        : [],
      protocolo: typeof dados.protocolo === 'string' ? dados.protocolo : '',
      notas: typeof dados.notas === 'string' ? dados.notas : '',
    }
  } catch {
    return { passosConcluidos: [], protocolo: '', notas: '' }
  }
}

export function salvarProtocolo(slug: string, estado: EstadoProtocolo): void {
  try {
    localStorage.setItem(chaveStorage(slug), JSON.stringify(estado))
  } catch {
    // Modo privado/armazenamento bloqueado: falha silenciosa graciosa
  }
}

export function gerarResumoTexto(guia: Guide, estado: EstadoProtocolo): string {
  const total = guia.passos.length
  const concluidosCount = estado.passosConcluidos.length
  const statusStr =
    concluidosCount === 0
      ? `NÃO INICIADO (0/${total})`
      : concluidosCount === total
        ? `CONCLUÍDO (${total}/${total})`
        : `EM ANDAMENTO (${concluidosCount}/${total})`

  const hojeFormatado = new Date().toLocaleDateString('pt-BR')

  const linhas = [
    'PROTOCOLO DE CANCELAMENTO · COMCAN',
    `Serviço: ${guia.nome}`,
    `Status: ${statusStr}`,
    `Data do registro: ${hojeFormatado}`,
  ]

  if (estado.protocolo.trim()) {
    linhas.push(`Número de Protocolo: ${estado.protocolo.trim()}`)
  }

  if (estado.notas.trim()) {
    linhas.push(`Anotações: ${estado.notas.trim()}`)
  }

  linhas.push('')
  linhas.push('Passos do Protocolo:')
  guia.passos.forEach((passo, index) => {
    const marcado = estado.passosConcluidos.includes(index) ? '[x]' : '[ ]'
    const num = String(index + 1).padStart(2, '0')
    linhas.push(`${marcado} ${num}. ${passo.titulo}`)
  })

  linhas.push('')
  linhas.push(`Canal oficial: ${guia.siteUrl}`)
  linhas.push(`Guia verificado em: ${formatarData(guia.verificadoEm)}`)

  return linhas.join('\n')
}
