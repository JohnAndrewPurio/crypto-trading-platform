import { useContext } from 'react'

import HoldingsCard from "./HoldingsCard/HoldingsCard";
import './Holdings.css'
import CoinContext from '../contexts/CoinContext';

export default function Holdings() {
    const { userData } = useContext(CoinContext)
    const { submittedData } = userData

    return (
        <div className="holdings">
            <h1>Current Holdings</h1>
            { 
                submittedData.length > 0 ? submittedData.map( ele => <HoldingsCard /> ): <h2>No Holdings Yet</h2> 
            }
        </div>
    )
}