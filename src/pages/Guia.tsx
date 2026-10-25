import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getGuide } from '../content/guides'
import { ROTULO_DIFICULDADE } from '../content/schema'
import {
  carregarProtocolo,
  gerarResumoTexto,
  salvarProtocolo,
  type EstadoProtocolo,
} from '../lib/protocolo'
import { formatarData, ROTULO_CANAL, ROTULO_CATEGORIA } from '../lib/rotulos'

export default function Guia() {
  const { slug } = useParams()
  const guia = getGuide(slug)

  const [slugAnterior, setSlugAnterior] = useState(slug)
  const [estado, setEstado] = useState<EstadoProtocolo>(() =>
    guia ? carregarProtocolo(guia.slug) : { passosConcluidos: [], protocolo: '', notas: '' },
  )
  const [copiado, setCopiado] = useState(false)

  // Redefine estado se o slug da rota mudar
  if (slug !== slugAnterior) {
    setSlugAnterior(slug)
    setEstado(
      guia ? carregarProtocolo(guia.slug) : { passosConcluidos: [], protocolo: '', notas: '' },
    )
  }

  // Salva no localStorage a cada alteração
  useEffect(() => {
    if (guia) {
      salvarProtocolo(guia.slug, estado)
    }
  }, [guia, estado])

  if (!guia) {
    return (
      <section className="vazio">
        <h1>Guia não encontrado</h1>
        <p>Ainda não documentamos esse serviço.</p>
        <Link className="botao" to="/guias">
          Ver todos os guias
        </Link>
      </section>
    )
  }

  const total = guia.passos.length
  const concluidosCount = estado.passosConcluidos.length
  const porcentagem = Math.round((concluidosCount / total) * 100)

  let statusTexto = `[STATUS: NÃO INICIADO 0/${total}]`
  let statusModo = 'nao-iniciado'

  if (concluidosCount === total) {
    statusTexto = `[STATUS: CONCLUÍDO ${total}/${total}]`
    statusModo = 'concluido'
  } else if (concluidosCount > 0) {
    statusTexto = `[STATUS: EM ANDAMENTO ${concluidosCount}/${total}]`
    statusModo = 'andamento'
  }

  function alternarPasso(indice: number) {
    setEstado((anterior) => {
      const jaExiste = anterior.passosConcluidos.includes(indice)
      const proximos = jaExiste
        ? anterior.passosConcluidos.filter((i) => i !== indice)
        : [...anterior.passosConcluidos, indice]
      return { ...anterior, passosConcluidos: proximos }
    })
  }

  function atualizarProtocolo(valor: string) {
    setEstado((anterior) => ({ ...anterior, protocolo: valor }))
  }

  function atualizarNotas(valor: string) {
    setEstado((anterior) => ({ ...anterior, notas: valor }))
  }

  async function copiarResumo() {
    if (!guia) return
    const texto = gerarResumoTexto(guia, estado)
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(texto)
      } else {
        const area = document.createElement('textarea')
        area.value = texto
        document.body.appendChild(area)
        area.select()
        document.execCommand('copy')
        document.body.removeChild(area)
      }
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch {
      setCopiado(false)
    }
  }

  return (
    <article className="guia guia--dossie">
      <nav aria-label="Você está aqui" className="trilha">
        <Link to="/guias">Guias</Link>
        <span aria-hidden="true">/</span>
        <span>{guia.nome}</span>
      </nav>

      <header className="guia__cabecalho">
        <div className="guia__carimbo">
          <p className="guia__categoria">{ROTULO_CATEGORIA[guia.categoria]}</p>
          <p className="guia__protocolo">
            Protocolo <span>#{guia.slug}</span>
          </p>
        </div>

        <h1>Como cancelar {guia.nome}</h1>
        <p className="guia__resumo">{guia.resumo}</p>
      </header>

      <div className="dossie">
        {/* COLUNA LATERAL - CONTROLE DO PROTOCOLO */}
        <aside className="dossie__lateral" aria-label="Controle e dados do protocolo">
          <div className="painel-controle">
            {/* Status do progresso */}
            <div className="painel-controle__status-bloco">
              <span className="painel-controle__rotulo">Seu Progresso</span>
              <div
                className={`painel-controle__carimbo painel-controle__carimbo--${statusModo}`}
                role="status"
              >
                {statusTexto}
              </div>
              <div className="painel-controle__barra-trilho" aria-hidden="true">
                <div
                  className="painel-controle__barra-preenchimento"
                  style={{ width: `${porcentagem}%` }}
                />
              </div>
            </div>

            {/* Ação Primária Destacada */}
            <div className="painel-controle__acao">
              <a
                className="botao botao--oficial"
                href={guia.siteUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Abrir cancelamento oficial →
              </a>
            </div>

            {/* Ficha técnica compacta */}
            <dl className="ficha ficha--lateral">
              <div className="ficha__campo">
                <dt>Dificuldade</dt>
                <dd>
                  <span
                    className="etiqueta etiqueta--dificuldade"
                    data-dificuldade={guia.dificuldade}
                  >
                    {ROTULO_DIFICULDADE[guia.dificuldade]}
                  </span>
                </dd>
              </div>
              <div className="ficha__campo">
                <dt>Onde cancelar</dt>
                <dd className="ficha__canais">
                  {guia.canais.map((canal) => (
                    <span className="etiqueta" key={canal}>
                      {ROTULO_CANAL[canal] ?? canal}
                    </span>
                  ))}
                </dd>
              </div>
              <div className="ficha__campo">
                <dt>Verificado em</dt>
                <dd className="ficha__data">{formatarData(guia.verificadoEm)}</dd>
              </div>
            </dl>

            {/* Bloco de Notas do Protocolo */}
            <div className="bloco-protocolo">
              <div className="bloco-protocolo__topo">
                <h2 className="bloco-protocolo__titulo">Comprovante do Atendimento</h2>
                <span className="bloco-protocolo__tag">Salvo no seu navegador</span>
              </div>

              <div className="bloco-protocolo__campo">
                <label htmlFor="protocolo-numero">Número do Protocolo</label>
                <input
                  id="protocolo-numero"
                  type="text"
                  placeholder="Ex.: 20261025-98124"
                  value={estado.protocolo}
                  onChange={(evento) => atualizarProtocolo(evento.target.value)}
                  autoComplete="off"
                />
              </div>

              <div className="bloco-protocolo__campo">
                <label htmlFor="protocolo-notas">Anotações rápidas</label>
                <textarea
                  id="protocolo-notas"
                  rows={3}
                  placeholder="Atendente, horário ou detalhes…"
                  value={estado.notas}
                  onChange={(evento) => atualizarNotas(evento.target.value)}
                />
              </div>

              <button
                type="button"
                className="botao botao--secundario bloco-protocolo__copiar"
                onClick={copiarResumo}
              >
                {copiado ? '✓ Resumo copiado!' : 'Copiar Resumo'}
              </button>
            </div>
          </div>
        </aside>

        {/* COLUNA PRINCIPAL - CHECKLIST E SEÇÕES */}
        <div className="dossie__principal">
          <aside className="alerta-retencao" aria-labelledby="retencao-titulo">
            <p className="alerta-retencao__selo">⚠ Pegadinha prevista</p>
            <h2 id="retencao-titulo">O que eles vão tentar oferecer</h2>
            <p>{guia.retencao}</p>
          </aside>

          {guia.requisitos.length > 0 && (
            <section aria-labelledby="requisitos-titulo" className="dossie__secao">
              <h2 id="requisitos-titulo">Antes de começar</h2>
              <ul className="lista-simples">
                {guia.requisitos.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          <section aria-labelledby="passos-titulo" className="dossie__secao">
            <div className="passos-cabecalho">
              <h2 id="passos-titulo">Passo a passo</h2>
              <span className="passos-cabecalho__dica" aria-hidden="true">
                Marque os passos conforme avançar
              </span>
            </div>

            <ol className="passos passos--checklist linha-do-tempo">
              {guia.passos.map((passo, indice) => {
                const concluido = estado.passosConcluidos.includes(indice)
                const checkId = `passo-check-${indice}`

                return (
                  <li
                    key={passo.titulo}
                    className={`passo-item ${concluido ? 'passo-item--concluido' : ''}`}
                  >
                    <div className="passo-item__marcador">
                      <input
                        id={checkId}
                        type="checkbox"
                        className="passo-item__checkbox sr-only"
                        checked={concluido}
                        onChange={() => alternarPasso(indice)}
                      />
                      <label
                        htmlFor={checkId}
                        className="passo-item__indicador"
                        title={
                          concluido
                            ? `Desmarcar passo ${indice + 1}`
                            : `Marcar passo ${indice + 1} como conferido`
                        }
                      >
                        <span className="passo-item__simbolo" aria-hidden="true">
                          {concluido ? '✓' : indice + 1}
                        </span>
                        <span className="sr-only">
                          {concluido
                            ? `Passo ${indice + 1} conferido. Clique para desmarcar.`
                            : `Marcar passo ${indice + 1} como conferido.`}
                        </span>
                      </label>
                    </div>

                    <div className="passo-item__corpo">
                      <h3 className="passo-item__titulo">
                        <label htmlFor={checkId} className="passo-item__rotulo-clicavel">
                          {passo.titulo}
                        </label>
                      </h3>
                      <p className="passo-item__detalhe">{passo.detalhe}</p>
                      {passo.aviso && (
                        <div className="aviso" role="note">
                          <strong>Atenção:</strong> {passo.aviso}
                        </div>
                      )}
                    </div>
                  </li>
                )
              })}
            </ol>
          </section>

          {guia.aposCancelar.length > 0 && (
            <section aria-labelledby="depois-titulo" className="dossie__secao">
              <h2 id="depois-titulo">Depois de cancelar</h2>
              <ul className="lista-simples">
                {guia.aposCancelar.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {guia.alternativas.length > 0 && (
            <section aria-labelledby="alternativas-titulo" className="dossie__secao">
              <h2 id="alternativas-titulo">Alternativas mais baratas</h2>
              <ul className="lista-simples">
                {guia.alternativas.map((alternativa) => (
                  <li key={alternativa.nome}>
                    {alternativa.url ? (
                      <a href={alternativa.url} rel="noopener noreferrer">
                        {alternativa.nome}
                      </a>
                    ) : (
                      <strong>{alternativa.nome}</strong>
                    )}
                    {alternativa.motivo ? ` — ${alternativa.motivo}` : null}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section aria-labelledby="fontes-titulo" className="fontes">
            <h2 id="fontes-titulo">Fontes oficiais</h2>
            <ul className="lista-simples">
              {guia.fontes.map((fonte) => (
                <li key={fonte.url}>
                  <a href={fonte.url} rel="noopener noreferrer">
                    {fonte.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </article>
  )
}
