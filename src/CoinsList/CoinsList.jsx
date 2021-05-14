import CoinCard from "./CoinCard/CoinCard";
import './CoinsList.css'
import { useContext } from 'react'
import CoinContext from '../contexts/CoinContext'

export default function CoinsList() {
    const { coinData, eventHandlers } = useContext(CoinContext)
    const coins  = coinData
    const { coinClickHandler } = eventHandlers

    return (
        <div className="coins-list">
            {
                coins ? coins.map( (coin, index) => <CoinCard key={index} coin={coin} coinClickHandler={coinClickHandler} index={index} />): ''
            } 
        </div>
    )
}