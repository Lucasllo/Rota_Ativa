import TabelaDados from '../../../components/tabelaDados/tabelaDados';
import './relatorios.css';

export function Relatorios() {

    return (
        <div className="relatorios">
            <div className="flex w-full items-center mb-7">
                <button
                    className="inline-flex mr-3 items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-200 leading-none py-0">

                    Últimos 30 dias

                </button>
                <button
                    className="inline-flex items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-200 leading-none py-0">
                    Filtrar por

                </button>
                <div className="ml-auto text-gray-500 text-xs sm:inline-flex hidden items-center">
                    <span className="mr-3">Página 2 de 4</span>
                    <button
                        className="inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0">

                    </button>
                    <button
                        className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0">

                    </button>
                </div>
            </div>
            <table className="tabela">
                <thead>
                    <tr>
                        <th className="tabela_headItem"
                        >Tipo</th>
                        <th className="tabela_headItem"
                        >Onde</th>
                        <th
                            className="tabela_headItem"
                        >
                            Descrição</th>
                        <th className="tabela_headItem"
                        >Quantia</th>
                        <th
                            className="tabela_headItem"
                        >
                            Data</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-gray-100">
                    <tr>
                        <td className="tabela_bodyItem">
                            <div>

                                Card
                            </div>
                        </td>
                        <td className="tabela_bodyItem" >
                            <div>
                                PayPal
                            </div>
                        </td>
                        <td className="tabela_bodyItem">
                            Subscription renewal</td>
                        <td className="tabela_bodyItem">- R$120.00 </td>
                        <td className="tabela_bodyItem">
                            <div>
                                <div> 24.12.2020
                                    <div>11:16 AM</div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <TabelaDados
                        tipo="teste"
                        local="aqui"
                        descricao="testando"
                        quantia="R$100.00"
                        data="04.09.2022"
                        hora="04:00"
                    />
                </tbody>
            </table>

        </div>
    )
}