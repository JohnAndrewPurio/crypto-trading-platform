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
  wallet: 100, portfolioValue: 0, currentHoldings: [], transactions: []
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
    const arr = [...coinData]
    arr.push(data)

    setCoinData(arr)
  }

  const coinClickHandler = (index) => {
    console.log(index, coinData)
  }

  useEffect(() => {
      getAvailableCoins(coinsList_URL)

      setEventHandlers({
        ...eventHandlers, 
        coinClickHandler: coinClickHandler
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

        <Form />
      </CoinContext.Provider>
    </div>
  );
}

export default App;
