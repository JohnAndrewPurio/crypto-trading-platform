import { useState } from "react";
import "./Form.css";

const Form = ({ balance, name, price }) => {
    let [trail, setTrail] = useState('Buy');
    let [disable, setDisable] = useState('')
    let [hide, setHide] = useState('');
    let [charged, setCharged] = useState(0);
    let limit = balance / price;

    const close = () => {
        setHide('hide');
    }

    const changeHandler = (event) => {
        let charge = event.target.value * price;
        if(charge > limit) {
            setDisable('disable');
        }
        else {
            setDisable('');
        }
        setCharged(charge.toFixed(4));
    }
    
    const clickHandler = (event) => {
        setTrail(event.target.value);
    }

    const submit = () => {
        if(disable === '') {
            console.log('clicked');
        }
    }

    return (
        <div className={`form-container ${hide}`}>
            <div className="label">
                <h2>Buy { name }</h2>
                <button onClick={close}>x</button>
            </div>
            <div className="content">
                <p>Current Price: ${price}</p>
                <div className="content-limit">
                    <input type="number" name="buy" id="coins" min="0" onChange={(e) => changeHandler(e)}/>
                    <p>Max: { limit.toFixed(4) }</p>
                </div>
                <p className="charged">You will be charged: ${ charged }</p>
                <ul>
                    <label htmlFor="Buy">
                        <input type="radio" name="trail" value="Buy" checked={true} onClick={(e) => clickHandler(e)}/>
                        Buy
                    </label>
                    <label htmlFor="Sell">
                        <input type="radio" name="trail" value="Sell" onClick={(e) => clickHandler(e)}/>
                        Sell 
                    </label>
                </ul>
                <button className={`btn ${disable}`} onClick={submit}>{ trail }</button>
            </div>
        </div>
    );
}

export default Form