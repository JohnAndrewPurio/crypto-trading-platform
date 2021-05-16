import { useContext } from 'react'

import HoldingsCard from "./HoldingsCard/HoldingsCard";
import './Holdings.css'
import CoinContext from '../contexts/CoinContext';

export default function Holdings() {
    const { userData, coinData } = useContext(CoinContext)
    const { submittedData } = userData //Start of calculation of currentHoldings
    const holdingsData = [] //Stores the currentHoldings

    //**Loop through each element of submittedData(which is obtained from the forms) and converge the values of the coins with the same name
    for(let index = 0; index < submittedData.length; index++) {
        let ele = JSON.parse(JSON.stringify(submittedData[index]))
        const foundMatch = holdingsData.find( holding => holding ? holding.coinName === ele.coinName: false )

        if(foundMatch) {
            foundMatch.coinAmount += ele.coinAmount
            foundMatch.totalPaid += ele.totalPaid

            continue
        }

        holdingsData.push(ele)
    }

    console.log(holdingsData) //Will print the values of the current holdings which is in the same format of the submittedData array

    return (
        <div className="holdings">
            <h1>Current Holdings</h1>
            { 
                // submittedData.length > 0 && coinData.length > 0 ? submittedData.map( (ele, index) => <HoldingsCard key={index} data={ele} /> )
                submittedData.length > 0 && coinData.length > 0 ? holdingsData.map( (ele, index) => <HoldingsCard key={index} data={ele} /> )
                    : <h2>No Holdings Yet</h2> 
            }
        </div>
    )
}