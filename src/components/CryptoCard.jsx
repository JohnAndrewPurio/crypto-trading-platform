const CryptoCard = ({ logo, cost, name, surge }) => {
    return (
        <div className="crypto-card">
            <div className="logo">
                <img src={logo} alt="coin-logo"/>
            </div>
            <div className="info">
                <h1>${ cost }</h1>
                <h2>{ name }</h2>
                <p>Last 24h: { surge }%</p>   
            </div>
        </div>        
    );
}

export default CryptoCard;