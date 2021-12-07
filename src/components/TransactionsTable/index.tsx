import { Container } from "./styled";
import {api} from '../../services/api';
import { useEffect, useState } from "react";

interface Transaction {
    id: number;
    name: string;
    price: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionsTable () {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions) )
    }, [])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.name}</td>
                                <td className={transaction.type}>
                                    {
                                        new Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(transaction.price)
                                    }
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </Container>
    )
}