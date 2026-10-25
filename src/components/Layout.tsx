import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="app">
      <a className="pular" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className="topo">
        <div className="container topo__interno">
          <Link to="/" className="marca">
            <span className="marca__sigla">comcan</span>
            <span className="marca__nome">Como cancelar</span>
          </Link>

          <nav aria-label="Navegação principal">
            <NavLink to="/" end>
              Início
            </NavLink>
            <NavLink to="/guias">Guias</NavLink>
          </nav>
        </div>
      </header>

      <main id="conteudo" className="container">
        <Outlet />
      </main>

      <footer className="rodape">
        <div className="container">
          <p>
            comcan — Como cancelar. Guias independentes, sem vínculo com os serviços citados.
          </p>
          <p className="rodape__aviso">
            As telas dos serviços mudam sem aviso. Confirme sempre no site oficial antes de
            concluir um cancelamento.
          </p>
        </div>
      </footer>
    </div>
  )
}
