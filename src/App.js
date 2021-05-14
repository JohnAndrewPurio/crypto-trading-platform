import './App.css';
import CoinsList from './CoinsList/CoinsList';
import Holdings from './Holdings/Holdings';
import Transactions from './Transactions/Transactions';
import Title from './Title/Title'
import Wallet from './Wallet/Wallet';
import PortfolioValue from './PortfolioValue/PortfolioValue';

function App() {
  return (
    <div className="App">
      <Title />
      <Wallet />
      <PortfolioValue />
      <CoinsList />
      <div className="transaction-status">
        <Holdings />
        <Transactions />
      </div>
      
    </div>
  );
}

export default App;
