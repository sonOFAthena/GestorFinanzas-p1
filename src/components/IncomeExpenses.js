import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = ({ saldoInicial }) => {
    //obtiene todas las txs de GlobalContext
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(tx => tx.amount);
    const { addTransaction } = useContext(GlobalContext);

    //hallar los gastos
    const saldoFinal = amounts.reduce((acc, item) => (acc += item) , 0).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Saldo Inicial</h4>
                <p className="money plus">{saldoInicial}</p>
            </div>
            <div>
                <h4>Saldo Final</h4>
                <p className="money minus">{saldoFinal}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses
