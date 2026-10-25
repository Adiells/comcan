import { Link } from 'react-router-dom'
import { ROTULO_DIFICULDADE, type Guide } from '../content/schema'
import { formatarData, ROTULO_CANAL, ROTULO_CATEGORIA } from '../lib/rotulos'

type Props = {
  guia: Guide
  /** Nível do título: 2 nas listagens, 3 quando o card é secundário. */
  nivel?: 2 | 3
}

export default function GuiaCard({ guia, nivel = 3 }: Props) {
  const Titulo = nivel === 2 ? 'h2' : 'h3'

  return (
    <Link className="card" to={`/guias/${guia.slug}`}>
      <div className="card__etiquetas">
        <span className="etiqueta etiqueta--dificuldade" data-dificuldade={guia.dificuldade}>
          {ROTULO_DIFICULDADE[guia.dificuldade]}
        </span>
        <span className="etiqueta">{ROTULO_CATEGORIA[guia.categoria]}</span>
      </div>

      <Titulo className="card__titulo">{guia.nome}</Titulo>
      <p className="card__resumo">{guia.resumo}</p>

      <div className="card__canais">
        {guia.canais.map((canal) => (
          <span className="etiqueta etiqueta--canal" key={canal}>
            {ROTULO_CANAL[canal] ?? canal}
          </span>
        ))}
      </div>

      <div className="card__rodape">
        <span className="card__meta">Verificado em {formatarData(guia.verificadoEm)}</span>
        <span className="card__acao" aria-hidden="true">
          Ver passos →
        </span>
      </div>
    </Link>
  )
}
