import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'
import Transaction from '../components/Transaction'

const TransationList = ({ openModal, setOpenModal }) => {
    //obtiene todas las txs de GlobalContext
    const { transactions } = useContext(GlobalContext);

    return (
      <>
        <h3>Listado de Movimientos</h3>
        <ul className="list">
          {transactions.map((tx) => (
            <Transaction key={tx.id} tx={tx} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
        </ul>
      </>
    );
}

export default TransationList
