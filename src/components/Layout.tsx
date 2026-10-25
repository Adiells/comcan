import { Link, NavLink, Outlet } from 'react-router-dom'

const ANO_ATUAL = new Date().getFullYear()

export default function Layout() {
  function rolarParaTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      <a className="pular" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className="topo">
        <div className="container topo__interno">
          <Link to="/" className="marca">
            <img className="marca__logo" src="/logo.png" alt="comcan" height={36} />
          </Link>

          <nav aria-label="Navegação principal" className="topo__nav">
            <NavLink to="/" end className="pilula-nav">
              Início
            </NavLink>
            <NavLink to="/guias" className="pilula-nav">
              Guias
            </NavLink>
          </nav>
        </div>
      </header>

      <main id="conteudo" className="container">
        <Outlet />
      </main>

      <footer className="rodape">
        <div className="container rodape__grid">
          {/* Coluna 1: Marca & Manifesto */}
          <div className="rodape__coluna rodape__coluna--marca">
            <Link to="/" className="rodape__logo-link">
              <img className="rodape__logo" src="/logo.png" alt="comcan" height={32} />
            </Link>
            <p className="rodape__descricao">
              Guias verificados passo a passo para cancelar assinaturas, planos de celular e serviços digitais sem burocracia ou armadilhas de retenção.
            </p>
            <div className="rodape__badges">
              <span className="badge-pop badge-pop--verde">100% Gratuito</span>
              <span className="badge-pop badge-pop--amarelo">Código Aberto</span>
              <span className="badge-pop">Sem Anúncios</span>
            </div>
          </div>

          {/* Coluna 2: Categorias Mais Buscadas */}
          <div className="rodape__coluna">
            <h3 className="rodape__titulo">Categorias</h3>
            <ul className="rodape__links">
              <li>
                <Link to="/guias?q=streaming">Streaming & Vídeo</Link>
              </li>
              <li>
                <Link to="/guias?q=software">Software & IA</Link>
              </li>
              <li>
                <Link to="/guias?q=telecom">Telefonia & Internet</Link>
              </li>
              <li>
                <Link to="/guias?q=financeiro">Finanças & Cartões</Link>
              </li>
              <li>
                <Link to="/guias" className="rodape__destaque">
                  Ver todos os guias →
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Comunidade & Projeto */}
          <div className="rodape__coluna">
            <h3 className="rodape__titulo">Comunidade</h3>
            <ul className="rodape__links">
              <li>
                <a
                  href="https://github.com/Adiells/comcan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub do Projeto ↗
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Adiells/comcan/issues/new?title=Sugest%C3%A3o+de+Guia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sugerir Novo Guia ↗
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Adiells/comcan/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reportar Passo Alterado ↗
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Adiells/comcan/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Como Contribuir ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Legal & Transparência */}
          <div className="rodape__coluna">
            <h3 className="rodape__titulo">Transparência</h3>
            <p className="rodape__texto-legal">
              <strong>Independência:</strong> O comcan é um projeto colaborativo e independente, sem qualquer afiliação comercial, patrocínio ou vínculo com as marcas citadas.
            </p>
            <p className="rodape__texto-legal">
              <strong>Privacidade:</strong> Sem rastreamento de dados ou cookies invasivos. Os números de protocolo são salvos somente no seu próprio navegador.
            </p>
          </div>
        </div>

        {/* Linha Inferior / Sub-footer */}
        <div className="container rodape__inferior">
          <p className="rodape__copyright">
            © {ANO_ATUAL} <strong>comcan</strong> — comcan.adiels.me · Devolvendo o controle ao consumidor.
          </p>
          <div className="rodape__sub-acoes">
            <a
              href="https://github.com/Adiells/comcan/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="rodape__sub-link"
            >
              Licença MIT
            </a>
            <button
              type="button"
              className="botao-subir"
              onClick={rolarParaTopo}
              aria-label="Voltar ao topo da página"
            >
              Voltar ao topo ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
