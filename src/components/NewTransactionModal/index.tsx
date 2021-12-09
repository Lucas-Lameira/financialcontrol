import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';
import closeImg from '../../assets/close.svg';
import outcomeImg from '../../assets/outcome.svg';
import incomeImg from '../../assets/income.svg';
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps ) {
    const {createTransaction} = useTransactions();
    
    //input state
    const [name, setName ] = useState('');
    const [price, setPrice] = useState(0);
    const [type, setType] = useState('income');
    const [category, setCategory] = useState('');

    async function handleCreateNewTransaction (event: FormEvent) {
        event.preventDefault();

        const transactionData = {name, price, type, category};

        await createTransaction(transactionData);
        onRequestClose();

        //reset input states
        setName('');
        setPrice(0);
        setType('income');
        setCategory('');
    }

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

        
        <Container onSubmit={handleCreateNewTransaction}>

            <h2>Cadastrar transação</h2>
            <input 
                type="text" 
                placeholder="Nome" 
                value={name}
                onChange={event => setName(event.target.value)}
            />
            <input 
                type="number" 
                placeholder="Preço" 
                value={price}
                onChange={event => setPrice(Number(event.target.value))}
            />

            <TransactionTypeContainer>
                <RadioBox 
                    type="button"
                    onClick={() => {setType('income')}}
                    isActive={type === 'income'}
                    activeColor="red"
                >
                    <img src={incomeImg} alt="" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox 
                    type="button"
                    onClick={() => {setType('outcome')}}
                    isActive={type === 'outcome'}
                    activeColor="green"
                >
                    <img src={outcomeImg} alt="" />                    
                    <span>Saída</span>
                </RadioBox>

            </TransactionTypeContainer>

            <input 
                type="text" 
                placeholder="Categoria"
                value={category}
                onChange={event => setCategory(event.target.value)}
            />
                
            <button type="submit">Cadastrar</button>
        </Container>
        
      </Modal>    
       
    );
}