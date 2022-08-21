import './caixaFormulario.css'

function CaixaFormularioLogin(props) {
    return (
        <div className={props.class}>
            <div  className="formulario_caixa-img">
                <img src={props.img} alt="" />
            </div>
            <div  className="formulario_caixa-dados indentacao">
                <label htmlFor={props.name}>{props.label}</label>
                <div>
                    <input
                        name={props.name}
                        id={props.id}
                        type={props.type}
                        placeholder={props.placeholder}
                        required={props.required}
                        onChange={e => props.evento(e.target.value)}
                        value={props.campo}
                    />
                </div>
            </div>
        </div>
    )
}

export default CaixaFormularioLogin;