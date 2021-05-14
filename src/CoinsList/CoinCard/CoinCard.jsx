import './CoinCard.css'

export default function CoinCard({coin, coinClickHandler, index}) {
    const { image, name, market_data } = coin
    const { small } = image
    const { current_price, price_change_percentage_24h } = market_data

    return (
        <div className="coin-card" onClick={() => coinClickHandler(coin)} >
            <img src={small} alt={name}/>
            <div className="desc">
                <h1>${current_price.usd}</h1>
                <h2>{name}</h2>
                <h3>Last 24h: <span className={price_change_percentage_24h < 0 ? 'loss': 'profit'}>{price_change_percentage_24h}%</span> </h3>
            </div>
        </div>
    )
}