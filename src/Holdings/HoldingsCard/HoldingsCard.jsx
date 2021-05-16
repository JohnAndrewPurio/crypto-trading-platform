import { useContext } from 'react'
import CoinContext from '../../contexts/CoinContext'

import './HoldingsCard.css'

export default function HoldingsCard({data}) {
    const { coinData } = useContext(CoinContext)
    const { market_data } = coinData.find( ele => ele.name === data.coinName )
    const { current_price } = market_data

    const currentValue = (current_price.usd * data.coinAmount).toFixed(2)
    const profitOrLoss = (currentValue - data.totalPaid).toFixed(2)

    console.log(current_price.usd)

    return (
        <div className="holdings-card">
            <h3>{data.coinName}: {data.coinAmount}</h3>
            <p>Total Paid: ${data.totalPaid}, Current Value: ${currentValue}</p>
            <p className={profitOrLoss < 0 ? 'loss': 'profit'}>P/L: ${profitOrLoss}</p>
        </div>
    )
}