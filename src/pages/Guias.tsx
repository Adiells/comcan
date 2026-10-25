import { useMemo, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import GuiaCard from '../components/GuiaCard'
import { filtrarGuias, getCategorias } from '../content/guides'
import type { Canal, Categoria } from '../content/schema'
import { ROTULO_CATEGORIA } from '../lib/rotulos'
import { useAtalhoBusca } from '../lib/useAtalhoBusca'

const OPCOES_CANAL: { valor: 'todos' | Canal; rotulo: string }[] = [
  { valor: 'todos', rotulo: 'Todos os canais' },
  { valor: 'site', rotulo: 'Site' },
  { valor: 'app', rotulo: 'App' },
  { valor: 'telefone', rotulo: 'Telefone' },
]

export default function Guias() {
  const [parametros, setParametros] = useSearchParams()
  const buscaInputRef = useRef<HTMLInputElement>(null)
  useAtalhoBusca(buscaInputRef)

  const termo = parametros.get('q') ?? ''
  const canalParam = (parametros.get('canal') as Canal | null) ?? 'todos'
  const categoriaParam = (parametros.get('categoria') as Categoria | null) ?? 'todas'

  const categorias = useMemo(() => getCategorias(), [])

  const resultados = useMemo(() => {
    return filtrarGuias(termo, {
      canal: canalParam,
      categoria: categoriaParam,
    })
  }, [termo, canalParam, categoriaParam])

  function atualizarFiltros(novos: {
    q?: string
    canal?: Canal | 'todos'
    categoria?: Categoria | 'todas'
  }) {
    const proximos = new URLSearchParams(parametros)

    if (novos.q !== undefined) {
      if (novos.q) proximos.set('q', novos.q)
      else proximos.delete('q')
    }

    if (novos.canal !== undefined) {
      if (novos.canal && novos.canal !== 'todos') proximos.set('canal', novos.canal)
      else proximos.delete('canal')
    }

    if (novos.categoria !== undefined) {
      if (novos.categoria && novos.categoria !== 'todas') proximos.set('categoria', novos.categoria)
      else proximos.delete('categoria')
    }

    setParametros(proximos, { replace: true })
  }

  function limparTodosFiltros() {
    setParametros({}, { replace: true })
  }

  const temFiltroAtivo = Boolean(termo || canalParam !== 'todos' || categoriaParam !== 'todas')

  return (
    <>
      <header className="pagina__cabecalho">
        <h1>Todos os guias</h1>
        <p>Busque pelo nome do serviço ou filtre por canal e categoria. Direto ao ponto.</p>
      </header>

      <section className="painel-filtros" aria-label="Filtros de busca do catálogo">
        <div className="busca">
          <label htmlFor="busca-guias">Buscar serviço</label>
          <div className="campo-busca">
            <input
              ref={buscaInputRef}
              id="busca-guias"
              type="search"
              value={termo}
              onChange={(evento) => atualizarFiltros({ q: evento.target.value })}
              placeholder="Ex.: Netflix, streaming, Spotify"
              autoComplete="off"
            />
            <kbd className="tecla-atalho" title="Pressione / para buscar" aria-hidden="true">
              /
            </kbd>
          </div>
        </div>

        <div className="filtros-grupo">
          <fieldset className="filtros-canais">
            <legend className="filtros-grupo__legenda">Canal de cancelamento</legend>
            <div className="filtros-canais__lista">
              {OPCOES_CANAL.map((opcao) => {
                const ativo = canalParam === opcao.valor
                return (
                  <button
                    key={opcao.valor}
                    type="button"
                    className={`chip-filtro ${ativo ? 'chip-filtro--ativo' : ''}`}
                    onClick={() => atualizarFiltros({ canal: opcao.valor })}
                  >
                    {opcao.rotulo}
                  </button>
                )
              })}
            </div>
          </fieldset>

          <div className="filtro-categoria">
            <label htmlFor="filtro-categoria-select">Categoria</label>
            <select
              id="filtro-categoria-select"
              value={categoriaParam}
              onChange={(evento) =>
                atualizarFiltros({ categoria: evento.target.value as Categoria | 'todas' })
              }
            >
              <option value="todas">Todas as categorias</option>
              {categorias.map(({ categoria, total }) => (
                <option key={categoria} value={categoria}>
                  {ROTULO_CATEGORIA[categoria]} ({total})
                </option>
              ))}
            </select>
          </div>
        </div>

        {temFiltroAtivo && (
          <div className="filtros-limpar">
            <button
              type="button"
              className="botao botao--secundario botao--sm"
              onClick={limparTodosFiltros}
            >
              Limpar filtros
            </button>
          </div>
        )}
      </section>

      <p className="resultado__contagem" role="status">
        {resultados.length} {resultados.length === 1 ? 'resultado' : 'resultados'}
      </p>

      {resultados.length === 0 ? (
        <div className="vazio">
          <h2>Nenhum guia para esse filtro</h2>
          <p>
            Tente outro termo ou canal. Você também pode{' '}
            <button type="button" className="link-botao" onClick={limparTodosFiltros}>
              limpar todos os filtros
            </button>
            .
          </p>
        </div>
      ) : (
        <ul className="lista">
          {resultados.map((guia) => (
            <li key={guia.slug}>
              <GuiaCard guia={guia} nivel={2} />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
