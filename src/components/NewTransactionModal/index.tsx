import { useState } from 'react';
import Modal from 'react-modal';

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

import closeImg from '../../assets/close.svg';
import outcomeImg from '../../assets/outcome.svg';
import incomeImg from '../../assets/income.svg';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps ) {
    const [type, setType] = useState('deposit');
  
    return(
        
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >

        <button type="button" onClick={onRequestClose} className="react-modal-close">
            <img src={closeImg} alt="fechar modal" />
        </button>


        <Container>
            <h2>Cadastrar transação</h2>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Preço" />

            <TransactionTypeContainer>
                <RadioBox 
                    type="button"
                    onClick={() => {setType('deposit')}}
                    isActive={type === 'deposit'}
                    
                    activeColor="red"
                >
                    <img src={incomeImg} alt="" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox 
                    type="button"
                    onClick={() => {setType('withdraw')}}
                    isActive={type === 'withdraw'}
                    activeColor="green"
                >
                    <img src={outcomeImg} alt="" />                    
                    <span>Saída</span>
                </RadioBox>

            </TransactionTypeContainer>

            <input type="text" placeholder="Categoria" />
                
            <button type="submit">Cadastrar</button>
        </Container>
        
      </Modal>    
       
    );
}