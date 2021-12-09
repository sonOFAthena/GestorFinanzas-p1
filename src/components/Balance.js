import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
    //obtiene todas las txs de GlobalContext
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(tx => tx.amount);
    console.log(amounts);
    const total = amounts.reduce((acc, item) => (acc += item) , 0).toFixed(2);
    console.log(total);

    return (
        <>
            <h4>Balance</h4>
            <h1>{total}</h1>
        </>
    )
}

export default Balance
