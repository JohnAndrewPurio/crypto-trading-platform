import { useContext } from 'react'

import TransactionsCard from "./TransactionsCard/TransactionsCard";
import './Transactions.css'
import CoinContext from '../contexts/CoinContext';

export default function Transactions() {
    const { userData } = useContext(CoinContext)
    const { submittedData } = userData

    return (
        <div className="transactions">
            <h1>Transactions</h1>
            { 
                submittedData.length > 0 ? submittedData.map( ele => <TransactionsCard /> ): <h2>No Transactions Yet</h2> 
            }
        </div>
    )
}