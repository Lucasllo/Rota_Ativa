import { useState } from 'react';
import CaixaFormulario from '../components/caixaFormulario/caixaFormulario';
import './cadastro.css';
import { infoBasic } from "../dados/dadosFormulario";
import { Link } from 'react-router-dom';

export function Cadastro() {

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [confirmaSenha, setConfirmaSenha] = useState();

    const dados = [
        {
            campo: nome,
            evento: setNome
        },
        {
            campo: email,
            evento: setEmail
        },
        {
            campo: senha,
            evento: setSenha
        },
        {
            campo: confirmaSenha,
            evento: setConfirmaSenha
        }
    ]

    return (
        <section className='cadastro'>
            <div className='container cadastro_caixa'>
                <h3>Seja bem-vindo(a) ao Rota Ativa!</h3>

                <form className='cadastro_formulario'>
                    {infoBasic().map(item => {
                        return (
                            <CaixaFormulario
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
                            />
                        )
                    })}

                    <div className="cadastro_formulario_enviar">
                        <input
                            className="cadastro_formulario_botao"
                            type="submit"
                            value="Cadastrar"
                        />
                    </div>
                    <br />
                    {/* <div className="login_formulario_info">
                        <p>
                            <span>
                                Ao continuar com o acesso, você concorda com a nossa
                            </span>
                            <Link to="#"> política de privacidade</Link>
                        </p>
                    </div> */}
                </form>
            </div>
        </section>
    )
}