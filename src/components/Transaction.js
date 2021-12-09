import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const Transaction = ({ tx, openModal, setOpenModal }) => {
    //obtiene la accion "deleteTransaction" del GlobalContext
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = tx.amount < 0 ? '-' : '+';


    return (
      <li className={tx.amount < 0 ? "minus" : "plus"}>
        {tx.text}{" "}
        <span>
          {sign}${Math.abs(tx.amount)}
        </span>
        <button className="delete-btn" onClick={() => deleteTransaction(tx.id)}>
          <AiOutlineDelete />
        </button>
        <button
          className="edit-btn edit-modal-btn"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <AiOutlineEdit />
        </button>
      </li>
    );
}

export default Transaction
