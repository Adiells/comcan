import { useRef, useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GuiaCard from '../components/GuiaCard'
import { getCategorias, guides } from '../content/guides'
import { ROTULO_CATEGORIA } from '../lib/rotulos'
import { useAtalhoBusca } from '../lib/useAtalhoBusca'

export default function Home() {
  const categorias = getCategorias()
  const recentes = [...guides].sort((a, b) => b.verificadoEm.localeCompare(a.verificadoEm))
  const [busca, setBusca] = useState('')
  const buscaInputRef = useRef<HTMLInputElement>(null)
  const navegar = useNavigate()

  useAtalhoBusca(buscaInputRef)

  function enviarBusca(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    const termo = busca.trim()
    navegar(termo ? `/guias?q=${encodeURIComponent(termo)}` : '/guias')
  }

  return (
    <>
      <section className="hero">
        <div className="hero__conteudo">
          <p className="hero__selo">Cancelar não deveria ser difícil</p>
          <h1>
            Descubra como cancelar planos e assinaturas <em>sem</em> cair em armadilha
          </h1>
          <p className="hero__texto">
            Passo a passo verificado para encerrar assinaturas de streaming, software, celular e
            muito mais. Sem cadastro, sem enrolação e sem ligar para call center quando dá para
            resolver pela internet.
          </p>

          <form className="hero__busca" role="search" onSubmit={enviarBusca}>
            <label className="sr-only" htmlFor="busca-hero">
              Buscar serviço
            </label>
            <div className="campo-busca">
              <input
                ref={buscaInputRef}
                id="busca-hero"
                type="search"
                value={busca}
                onChange={(evento) => setBusca(evento.target.value)}
                placeholder="Netflix, Spotify, Adobe…"
                autoComplete="off"
              />
              <kbd className="tecla-atalho" title="Pressione / para buscar" aria-hidden="true">
                /
              </kbd>
            </div>
            <button className="botao" type="submit">
              Buscar
            </button>
          </form>

          <div className="hero__acoes">
            <Link className="botao botao--secundario" to="/guias">
              Ver todos os guias
            </Link>
            <span className="hero__contagem">
              {guides.length} {guides.length === 1 ? 'serviço' : 'serviços'} documentados
            </span>
          </div>
        </div>

        <aside className="hero__ficha" aria-label="Resumo do catálogo">
          <p className="hero__ficha-selo">Ficha do catálogo</p>
          <dl className="hero__ficha-dados">
            <div>
              <dt>Serviços</dt>
              <dd>{guides.length}</dd>
            </div>
            <div>
              <dt>Categorias</dt>
              <dd>{categorias.length}</dd>
            </div>
            <div>
              <dt>Idioma</dt>
              <dd>pt-BR</dd>
            </div>
            <div>
              <dt>Acesso</dt>
              <dd>Livre</dd>
            </div>
          </dl>
          <p className="hero__ficha-nota">Sem cadastro · sem cobrança</p>
        </aside>
      </section>

      {categorias.length > 0 && (
        <section aria-labelledby="categorias-titulo" className="secao">
          <h2 id="categorias-titulo">Navegue por categoria</h2>
          <ul className="chips">
            {categorias.map(({ categoria, total }) => (
              <li key={categoria}>
                <Link className="chip" to={`/guias?q=${encodeURIComponent(categoria)}`}>
                  {ROTULO_CATEGORIA[categoria]}
                  <span className="chip__total">{total}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="recentes-titulo" className="secao">
        <h2 id="recentes-titulo">Verificados recentemente</h2>
        <ul className="lista">
          {recentes.map((guia) => (
            <li key={guia.slug}>
              <GuiaCard guia={guia} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="como-titulo" className="secao">
        <h2 id="como-titulo">Como os guias funcionam</h2>
        <ol className="passos-resumo">
          <li>
            <strong>Encontre o serviço</strong>
            <p>Cada guia é escrito a partir da central de ajuda oficial da empresa.</p>
          </li>
          <li>
            <strong>Siga o caminho mais curto</strong>
            <p>Indicamos o canal que realmente funciona, inclusive quando só o telefone resolve.</p>
          </li>
          <li>
            <strong>Fique com o comprovante</strong>
            <p>Mostramos o que conferir depois para garantir que a cobrança parou.</p>
          </li>
        </ol>
      </section>
    </>
  )
}
