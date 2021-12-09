import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';

const AddTransaction = (edit, setEdit) => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext)
    const [typeMov, setTypeMov] = useState('Ingreso');

    const onSubmitHandle = (e) =>{
         e.preventDefault();

        const newTransaction ={
            id:uuidv4(),
            text,
            amount:  parseFloat(typeMov === 'gasto' ? amount * (-1) : amount)
        }
        
        addTransaction(newTransaction);
    }

    useEffect(() => {
        if(edit == "true"){
            console.log(edit)
            console.log('editing');
        }
        else
            console.log("creating");
    }, [edit])


    return (
      <>
        <h3>Registro</h3>
        <form onSubmit={onSubmitHandle}>
          <div>
            <label htmlFor="typeMov">Tipo Movimiento:</label>
            <select
              name="typeMov"
              id="typeMov"
              defaultValue={typeMov}
              onChange={(e) => setTypeMov(e.target.value)}
            >
              <option value="ingreso">Ingreso</option>
              <option value="gasto">Gasto</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="text">Nombre</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text..."
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">
              Cantidad
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
            />
          </div>
          {/*<button className="btn"> {edit ? "Edit Transaction" : "Add Transaction"}</button> */}
          <button className="btn"> "Add Transaction" </button>
        </form>
      </>
    );
}

export default AddTransaction
