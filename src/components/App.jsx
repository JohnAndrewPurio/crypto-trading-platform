import CryptoCard from "./CryptoCard";
import Form from "./Form";

const App = () => {
    const balance=100;
    return (
        <div className="container">
            <h1>Earn Some Virtual Money </h1>
            <p>To buy virtual food</p>
            <h2>Wallet: $100</h2>
            <h1>Porfolio Value: $0.00</h1>
            
            {/* <div className="crypto-cards">
                <CryptoCard logo={'../assets/bitcoin.svg'} cost={49128} name={'Bitcoin'} surge={-3.23363}/>
                <CryptoCard logo={'../assets/ethereum.svg'} cost={3807.41} name={'Ethereum'} surge={-3.27081}/>
                <CryptoCard logo={'../assets/dogecoin.svg'} cost={0.511823} name={'Dogecoin'} surge={15.97384}/>
            </div> */}
            
            <div className="form">
                <Form name={'Doge Coin'} balance={balance} price={0.511823} />
            </div>
        </div>
    );
}

export default App;