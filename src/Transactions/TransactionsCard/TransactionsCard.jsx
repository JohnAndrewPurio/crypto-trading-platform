import './TransactionsCard.css'

export default function TransactionsCard() {
    return (
        <div className="transactions-card transaction-buy">
            <h2>Dogecoin - 50@$0.511823</h2>
            <h3>Paid: $25.59</h3>
            <p>Bought on 14/06/2021, 10:40:27</p>
        </div>
    )
}

// const onSubmitOutputObject = {
//      coinName: 'DogeCoin',
//      coinAmount : 1000,
//      totalPaid: 1000,
//      dateBought: '14/06/2021, 10:40:27'
// }