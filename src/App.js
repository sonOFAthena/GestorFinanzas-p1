import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransationList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import EditModal from './components/EditModal';
import React, { useState } from 'react';
import AddSaldoInicial from './components/AddSaldoInicial';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [saldoInicial, setSaldoInicial] = useState(0);

  return (
    <GlobalProvider className="globalProvider">
      {!openModal && <Header />}
      <div className="container">
        <AddSaldoInicial setSaldoInicial={setSaldoInicial} />
        {!openModal && <Balance />}
        {!openModal && <IncomeExpenses saldoInicial={saldoInicial}/>}
        {!openModal && <TransactionList openModal={openModal} setOpenModal={setOpenModal} />}
        {!openModal && <AddTransaction edit={edit} setEdit={setEdit}/>}
        { openModal && <EditModal openModal={openModal} setOpenModal={setOpenModal} edit={edit} setEdit={setEdit}></EditModal>}
      </div>
    </GlobalProvider>
  );
}

export default App;
