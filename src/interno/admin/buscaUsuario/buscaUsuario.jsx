import './buscaUsuario.css';

export function BuscaUsuario() {

    return (
        <div className="caixa_buscaUsuario">
          <div>Usuários</div>
          <div>
            <input type="text" className="" placeholder="Buscar" />
            
          </div>
          <div>
            <button className="link_buscaUsuario">
              <div className="link_buscaUsuario-foto">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50"alt="profile" />
                <span>Matheus Dias</span>
              </div>
              <div className="link_buscaUsuario-dados">
                <div className="link_buscaUsuario-dados-prof">
                  Designer UI / UX</div>
                <span className="link_buscaUsuario-dados-valor">R$1,902.00</span>
              </div>
            </button>
          </div>
        </div>
    )
}