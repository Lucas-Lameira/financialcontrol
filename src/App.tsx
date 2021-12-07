import { createServer } from "miragejs"
import Modal from 'react-modal';

import { GlobalStyle } from "./styles/global";

import {Header} from './components/Header';
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { useState } from "react";


createServer({
  routes() {
    this.namespace = "api"

    this.get("/transactions", () => {
      return {
        transactions: [
          { id: 1, name: "Inception", year: 2010 },
          { id: 2, name: "Interstellar", year: 2014 },
          { id: 3, name: "Dunkirk", year: 2017 },
        ],
      }
    })
  },
})

Modal.setAppElement('#root');

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionOpen] = useState(false);

    function handleOpenNewTransactionModal (){
        setIsNewTransactionOpen(true)
    }

    function handleCloseNewTransactionModal (){
        setIsNewTransactionOpen(false)
    }

  return (
    <div>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />
     
      <GlobalStyle />
    </div>
  );
}