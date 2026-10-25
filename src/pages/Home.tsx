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
          <h1>Cancele qualquer assinatura em minutos. Sem pegadinhas.</h1>
          <p className="hero__texto">
            Passo a passo verificado para encerrar assinaturas de streaming, software, celular e
            muito mais. Sem cadastro e sem enrolação.
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

          {categorias.length > 0 && (
            <nav aria-label="Categorias">
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
            </nav>
          )}
        </div>

        <div className="hero__visual">
          <div className="hero__moldura">
            <img
              src="/hero-eject.webp"
              alt="Botão vermelho de ejetar cortando o cabo de uma assinatura"
            />
            <span className="hero__badge">Ejetar vínculo</span>
          </div>
        </div>
      </section>

      <section aria-labelledby="recentes-titulo" className="secao">
        <h2 id="recentes-titulo">Verificados recentemente</h2>
        <ul className="lista">
          {recentes.map((guia) => (
            <li key={guia.slug}>
              <GuiaCard guia={guia} />
            </li>
          ))}
        </ul>
        <p className="secao__acao">
          <Link className="botao botao--secundario" to="/guias">
            Ver todos os guias ({guides.length})
          </Link>
        </p>
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
