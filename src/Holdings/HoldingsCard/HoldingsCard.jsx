import './HoldingsCard.css'

export default function HoldingsCard() {
    return (
        <div className="holdings-card">
            <h3>Dogecoin: 50</h3>
            <p>Total Paid: $25.50, Current Value: $25.59</p>
            <p className="profit">P/L: $0.09</p>
        </div>
    )
}