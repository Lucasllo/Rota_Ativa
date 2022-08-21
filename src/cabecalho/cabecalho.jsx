import { Link } from 'react-router-dom';
import './cabecalho.css';

export function Cabecalho() {
    return (
        <header className="cabecalho">
            <div className='container cabecalho_caixa'>
                <div className='cabecalho_logo'>
                    <Link to="/">
                        <img src="/img/logo.png" alt="logo" />
                    </Link>
                </div>
                <nav className='cabecalho_menu'>
                    <ul>
                        <li className='cabecalho_menu-item'>
                            <Link to="/login">
                                <img src="/img/login.svg" alt="login" />
                                <span>Login</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}