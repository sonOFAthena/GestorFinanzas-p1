import React, { useState, useEffect } from 'react'
import AddTransaction from './AddTransaction';
import "./EditModal.css";
import ReactDOM from 'react-dom';

const EditModal = ({ openModal, setOpenModal, children, edit, setEdit}) => {

    return ReactDOM.createPortal(
        <>
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn"> 
                    <button onClick={()=> setOpenModal(false)}> X </button>
                </div>
                <div >
                    <h1>Editar valor</h1>
                </div>
                <div >
                    <p>Ingrese el nuevo valor para el elemento seleccionado</p>
                    {/*<AddTransaction edit={edit} setEdit={setEdit}/> */}
                    <AddTransaction edit={edit} setEdit={setEdit}/>
                </div>
                {children}
            </div>
        </div>
        </>,
        document.getElementById('portal')
    )
}

export default EditModal
