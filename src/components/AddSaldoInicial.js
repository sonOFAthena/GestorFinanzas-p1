import React, { useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '../context/GlobalState';

const AddSaldoInicial = ( { setSaldoInicial }) => {
    const [input, setInput] = useState(''); 
    const [show, setShow] = useState(true)
    const { addTransaction } = useContext(GlobalContext)

    const handleInputChange = ({target}) => {
        setInput(target.value);
    }

    const handleSubmit= (e) =>{
       //Evita el evento por defecto
       e.preventDefault();
       setSaldoInicial(input);

       const newTransaction ={
            id:uuidv4(),
            text: "Saldo Inicial",
            amount: +input
        }
        addTransaction(newTransaction);

        console.log(show);
    }

    return (
        
        <div>
        <form onSubmit={handleSubmit} >
            <div>
                <label>Ingrese saldo inicial:</label>
                <input 
                    type="text"
                    className="task-input"
                    required
                    value={input}
                    onChange={handleInputChange} 
                />
                <button type="submit" > Fijar </button>
            </div>
        </form>
      </div>
    );
}

export default AddSaldoInicial
