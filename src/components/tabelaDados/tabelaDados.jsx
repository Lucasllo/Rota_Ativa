function TabelaDados(props) {
    return (
        <tr>
            <td className="tabela_bodyItem">
                <div>
                    {props.tipo}
                </div>
            </td>
            <td className="tabela_bodyItem" >
                <div>
                    {props.local}
                </div>
            </td>
            <td className="tabela_bodyItem">
                {props.descricao}
            </td>
            <td className="tabela_bodyItem">
                {props.quantia} 
            </td>
            <td className="tabela_bodyItem">
                <div>
                    <div> 
                        {props.data}
                        <div>{props.hora}</div>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default TabelaDados;