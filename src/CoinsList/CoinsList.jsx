import CoinCard from "./CoinCard/CoinCard";
import './CoinsList.css'


export default function CoinsList() {
    return (
        <div className="coins-list">
            <CoinCard />
            <CoinCard />
            <CoinCard />
        </div>
    )
}