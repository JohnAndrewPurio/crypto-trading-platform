import { useContext } from 'react'
import CoinContext from '../../contexts/CoinContext'

import './HoldingsCard.css'


export default function HoldingsCard() {
    const { coinData } = useContext(CoinContext)
    const { market_data } = coinData
    const { current_price } = market_data

    return (
        <div className="holdings-card">
            <h3>Dogecoin: 50</h3>
            <p>Total Paid: $25.50, Current Value: $25.59</p>
            <p className="profit">P/L: $0.09</p>
        </div>
    )
}