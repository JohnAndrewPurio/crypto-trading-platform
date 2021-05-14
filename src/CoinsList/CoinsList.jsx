import CoinCard from "./CoinCard/CoinCard";
import './CoinsList.css'
import { useContext } from 'react'
import CoinContext from '../contexts/CoinContext'

export default function CoinsList() {
    const { coinData } = useContext(CoinContext)
    const [ coins ] = coinData

    console.log(coins)

    return (
        <div className="coins-list">
            {
                coins ? coins.map( (coin, index) => <CoinCard key={index} coin={coin} />): ''
            } 
        </div>
    )
}