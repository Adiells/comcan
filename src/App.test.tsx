import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from './App'
import { guides } from './content/guides'

function renderizar(rota: string) {
  return render(
    <MemoryRouter initialEntries={[rota]}>
      <App />
    </MemoryRouter>,
  )
}

describe('rotas', () => {
  it('mostra a marca comcan na home', () => {
    renderizar('/')
    expect(screen.getAllByRole('link', { name: /comcan/i })[0]).toBeInTheDocument()
  })

  it('lista todos os guias em /guias', () => {
    renderizar('/guias')
    for (const guia of guides) {
      expect(screen.getByRole('heading', { name: guia.nome })).toBeInTheDocument()
    }
  })

  it('renderiza os passos de um guia', () => {
    const guia = guides.find((item) => item.slug === 'netflix')!
    renderizar(`/guias/${guia.slug}`)
    expect(
      screen.getByRole('heading', { name: `Como cancelar ${guia.nome}` }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: guia.passos[0].titulo })).toBeInTheDocument()
  })

  it('filtra a busca pelo nome do serviço', async () => {
    const usuario = userEvent.setup()
    renderizar('/guias')

    await usuario.type(screen.getByLabelText('Buscar serviço'), 'spotify')

    expect(screen.getByRole('status')).toHaveTextContent('1 resultado')
    expect(screen.getByRole('heading', { name: 'Spotify Premium' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Netflix' })).not.toBeInTheDocument()
  })

  it('leva a busca do hero para a lista já filtrada', async () => {
    const usuario = userEvent.setup()
    renderizar('/')

    await usuario.type(screen.getByLabelText('Buscar serviço'), 'netflix')
    await usuario.click(screen.getByRole('button', { name: 'Buscar' }))

    expect(screen.getByRole('heading', { name: 'Todos os guias' })).toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent('1 resultado')
    expect(screen.getByRole('heading', { name: 'Netflix' })).toBeInTheDocument()
  })

  it('trata slug inexistente como guia não encontrado', () => {
    renderizar('/guias/servico-que-nao-existe')
    expect(screen.getByRole('heading', { name: 'Guia não encontrado' })).toBeInTheDocument()
  })

  it('busca com normalização NFD independente de acentos', async () => {
    const usuario = userEvent.setup()
    renderizar('/guias')

    const inputBusca = screen.getByLabelText('Buscar serviço')
    await usuario.type(inputBusca, 'música')

    // Deve retornar Spotify e Deezer mesmo com termo acentuado
    expect(screen.getByRole('heading', { name: 'Spotify Premium' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Deezer' })).toBeInTheDocument()

    await usuario.clear(inputBusca)
    await usuario.type(inputBusca, 'musica')

    // Deve retornar os mesmos serviços sem acento
    expect(screen.getByRole('heading', { name: 'Spotify Premium' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Deezer' })).toBeInTheDocument()
  })

  it('foca no input de busca ao pressionar o atalho /', async () => {
    const usuario = userEvent.setup()
    renderizar('/guias')

    const inputBusca = screen.getByLabelText('Buscar serviço')
    expect(inputBusca).not.toHaveFocus()

    await usuario.keyboard('/')
    expect(inputBusca).toHaveFocus()
  })

  it('filtra guias por canal de cancelamento', async () => {
    const usuario = userEvent.setup()
    renderizar('/guias')

    // Clica no filtro de canal Telefone
    const botaoTelefone = screen.getByRole('button', { name: 'Telefone' })
    await usuario.click(botaoTelefone)

    // Serviços que exigem telefone devem estar visíveis
    expect(screen.getByRole('heading', { name: 'Claro Móvel' })).toBeInTheDocument()
    // Serviços que não atendem por telefone (ex: Netflix) não devem estar visíveis
    expect(screen.queryByRole('heading', { name: 'Netflix' })).not.toBeInTheDocument()
  })

  it('gerencia checklist de passos e atualiza carimbo de status', async () => {
    const usuario = userEvent.setup()
    localStorage.clear()
    const guia = guides.find((item) => item.slug === 'netflix')!
    const total = guia.passos.length

    renderizar(`/guias/${guia.slug}`)

    // Status inicial: NÃO INICIADO
    expect(screen.getByRole('status')).toHaveTextContent(`[STATUS: NÃO INICIADO 0/${total}]`)

    // Link oficial apontando para siteUrl
    const linkOficial = screen.getByRole('link', { name: /abrir cancelamento oficial/i })
    expect(linkOficial).toHaveAttribute('href', guia.siteUrl)

    // Marca o primeiro passo
    const primeiroCheck = screen.getByRole('checkbox', {
      name: /marcar passo 1 como conferido/i,
    })
    await usuario.click(primeiroCheck)

    // Status atualiza para EM ANDAMENTO
    expect(screen.getByRole('status')).toHaveTextContent(`[STATUS: EM ANDAMENTO 1/${total}]`)

    // Verifica persistência no localStorage
    const salvo = JSON.parse(localStorage.getItem(`comcan:protocolo:${guia.slug}`) ?? '{}')
    expect(salvo.passosConcluidos).toContain(0)

    // Preenche número do protocolo e anotações
    const inputProtocolo = screen.getByLabelText('Número do Protocolo')
    await usuario.type(inputProtocolo, 'PROT-12345')

    const inputNotas = screen.getByLabelText('Anotações rápidas')
    await usuario.type(inputNotas, 'Cancelamento confirmado')

    const salvoAtualizado = JSON.parse(
      localStorage.getItem(`comcan:protocolo:${guia.slug}`) ?? '{}',
    )
    expect(salvoAtualizado.protocolo).toBe('PROT-12345')
    expect(salvoAtualizado.notas).toBe('Cancelamento confirmado')
  })
})
