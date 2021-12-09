import { createServer, Model } from "miragejs";
import Modal from 'react-modal';

import { GlobalStyle } from "./styles/global";

import {Header} from './components/Header';
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { useState } from "react";
import { TransactionsProvider } from "./hooks/useTransactions";


createServer({

  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          name: "Entrega de um webapp",
          price: 5600,
          type: "income",
          category: "dev",
          createdAt: new Date('2021-12-07 09:00:00')
        },
        {
          id: 2,
          name: "X-tudo",
          price: 25,
          type: "outcome",
          category: "comida",
          createdAt: new Date('2021-12-07 09:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = "api"

    this.get("/transactions", () => {
      return this.schema.all("transaction")
    })


    this.post('/transactions', (schema, request) => {
      let data = JSON.parse(request.requestBody)
    
      return schema.create("transaction", data)
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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />
     
      <GlobalStyle />
    </TransactionsProvider>
  );
}