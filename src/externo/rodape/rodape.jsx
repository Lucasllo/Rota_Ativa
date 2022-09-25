import './rodape.css'
import { Link } from 'react-router-dom';

export function Rodape() {
    return (
        <footer className='rodape'>
            <div className="container rodape_caixa">
                <div className="rodape_info">
                    <ul>
                        <li className="rodape_info_item">
                            <ul>
                                <li>
                                    <Link to="">
                                        Como funciona
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        Perguntas frequentes
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        Sobre nós
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="rodape_info_item">
                            <ul>
                                <li>
                                    <Link to="">
                                        Contato
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        Minha conta
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        Política de privacidade
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="rodape_redes">
                    <ul>
                        <li className="rodape_redes_instagram">
                            <Link to="">
                                <img src="/img/instagram.png" alt="logo Instagram" />
                            </Link>
                        </li>
                        <li className="rodape_redes_linkedin">
                            <Link to="">
                                <img src="/img/linkedin.png" alt="logo Twitter" />
                            </Link>
                        </li>
                        <li className="rodape_redes_facebook">
                            <Link to="">
                                <img src="/img/facebook.png" alt="logo Facebook" />
                            </Link>
                        </li>
                        <li className="rodape_redes_facebook">
                            <Link to="">
                                <img src="/img/twitter.png" alt="logo Facebook" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}