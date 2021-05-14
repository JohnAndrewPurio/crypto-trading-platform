import TransactionsCard from "./TransactionsCard/TransactionsCard";

export default function Transactions() {
    return (
        <div className="transactions">
            <h1>Transactions</h1>
            <TransactionsCard />
            <TransactionsCard />
        </div>
    )
}