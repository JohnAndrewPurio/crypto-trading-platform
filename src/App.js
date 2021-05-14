import { useState, useEffect } from 'react'
import CoinContext from './contexts/CoinContext'

import './App.css';
import CoinsList from './CoinsList/CoinsList';
import Holdings from './Holdings/Holdings';
import Transactions from './Transactions/Transactions';
import Title from './Title/Title'
import Wallet from './Wallet/Wallet';
import PortfolioValue from './PortfolioValue/PortfolioValue';
import Form from './Form/Form'

const coinsList_URL = 'https://api.coingecko.com/api/v3/coins/'
const defaultData = {
  wallet: 100, 
  portfolioValue: 0, 
  submittedData: []
}

function App() {
  const [coinData, setCoinData] = useState([])
  const [userData, setUserData] = useState(defaultData)
  const [eventHandlers, setEventHandlers] = useState({})

  const getAvailableCoins = async (url) => {
      try {
        const fetchCoinsList = await fetch(url)
        const jsonCoinsList = await fetchCoinsList.json()
  
        handleData(jsonCoinsList)
      } catch(e) {
        console.log(e)
      } 
  }

  const handleData = async (data) => {
    setCoinData(data)
  }

  const coinClickHandler = (coin) => {
    console.log(coin) // coin contains the data about the selected cryptocurrency in the list
  }

  const onSubmitHandler = (coinName, coinAmount, totalPaid, dateBought) => {
    const onSubmitOutput = {
      coinName: coinName,
      coinAmount : coinAmount,
      totalPaid: totalPaid,
      dateBought: dateBought
    }
    const { submittedData } = userData
    const currentData = [...submittedData]

    currentData.push(onSubmitOutput)

    setUserData( {...userData, submittedData: currentData} )
  }

  useEffect(() => {
      getAvailableCoins(coinsList_URL)

      setEventHandlers({
        coinClickHandler: coinClickHandler,
        onSubmitHandler: onSubmitHandler
      })

      // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <CoinContext.Provider value={{coinData, userData, eventHandlers}}>
        <Title />
        <Wallet />
        <PortfolioValue />
        <CoinsList />
        <div className="transaction-status">
          <Holdings />
          <Transactions />
        </div>

        {/* <Form /> */}
      </CoinContext.Provider>
    </div>
  );
}

export default App;
