import './CoinCard.css'

export default function CoinCard() {
    return (
        <div className="coin-card">
            <img src="https://coinfomania.com/wp-content/uploads/2019/09/BTC-img-min-740x492.jpg" alt="bitcoin" />
            <div className="desc">
                <h1>$41928</h1>
                <h2>Bitcoin</h2>
                <h3>Last 24h: <span className="loss">-3.23434%</span> </h3>
            </div>
        </div>
    )
}