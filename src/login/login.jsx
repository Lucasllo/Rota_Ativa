import { useState } from 'react';
import CaixaFormularioLogin from '../components/caixaFormularioLogin/caixaFormularioLogin';
import './login.css';
import { log } from "../dados/dadosFormulario";
import { Link } from 'react-router-dom';
import UsersService from '../service/users';

export function Login() {

    const userService = new UsersService();
    
    function logar(e) {
        e.preventDefault();
        userService.getUser().then((resp) => {
            console.log(resp);
        })
    }

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const dados = [
        {
            campo: email,
            evento: setEmail
        },
        {
            campo: senha,
            evento: setSenha
        }
    ]

    return (
        <section className='login'>
            <div className='container login_caixa'>
                <h3>Inicie sua sessão</h3>

                <form onSubmit={logar}  className='login_formulario'>
                    {log().map(item => {
                        return (
                            <CaixaFormularioLogin
                                key={item.position}
                                name={item.name}
                                id={item.id}
                                type={item.type}
                                placeholder={item.placeholder}
                                required={item.required}
                                class={item.class}
                                label={item.label}
                                campo={dados[item.position].campo}
                                evento={v => dados[item.position].evento(v)}
                                img={item.img}
                            />
                        )
                    })}

                    <div className="login_formulario_enviar">
                        <Link to="/recuperarSenha">
                            <span>
                                Esqueceu a senha?
                            </span>
                        </Link>
                        <input
                            className="login_formulario_botao"
                            type="submit"
                            value="Logar"
                        />
                    </div>
                    <br />
                    <div className="login_formulario_info">
                        <p>
                            <span>
                                Não tem cadastro? 
                            </span>
                            <Link to="/cadastro">Cadastre-se</Link>
                        </p>
                    </div>

                </form>
            </div>
        </section>
    )
}