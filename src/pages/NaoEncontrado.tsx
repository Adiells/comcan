import { Link } from 'react-router-dom'

export default function NaoEncontrado() {
  return (
    <section className="vazio">
      <h1>Página não encontrada</h1>
      <p>O endereço acessado não existe ou o guia foi movido.</p>
      <Link className="botao" to="/guias">
        Ver todos os guias
      </Link>
    </section>
  )
}
