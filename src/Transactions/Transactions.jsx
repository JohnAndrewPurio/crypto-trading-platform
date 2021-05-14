import TransactionsCard from "./TransactionsCard/TransactionsCard";
import './Transactions.css'

export default function Transactions() {
    return (
        <div className="transactions">
            <h1>Transactions</h1>
            <TransactionsCard />
            <TransactionsCard />
        </div>
    )
}