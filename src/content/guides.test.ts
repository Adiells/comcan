import { describe, expect, it } from 'vitest'
import { guides } from './guides'

describe('conteúdo dos guias', () => {
  it('carrega ao menos um guia (o carregador valida o schema)', () => {
    expect(guides.length).toBeGreaterThan(0)
  })

  it('não repete slugs', () => {
    const slugs = guides.map((guia) => guia.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('não usa data de verificação no futuro', () => {
    const hoje = new Date().toISOString().slice(0, 10)
    const futuros = guides.filter((guia) => guia.verificadoEm > hoje).map((guia) => guia.slug)
    expect(futuros).toEqual([])
  })

  it('só aponta para fontes em HTTPS', () => {
    const inseguros = guides.flatMap((guia) =>
      [guia.siteUrl, ...guia.fontes.map((fonte) => fonte.url)].filter(
        (url) => !url.startsWith('https://'),
      ),
    )
    expect(inseguros).toEqual([])
  })

  it('mantém o resumo curto o bastante para meta description', () => {
    const longos = guides.filter((guia) => guia.resumo.length > 160).map((guia) => guia.slug)
    expect(longos).toEqual([])
  })
})
