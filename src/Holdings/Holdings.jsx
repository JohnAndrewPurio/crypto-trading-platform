import HoldingsCard from "./HoldingsCard/HoldingsCard";
import './Holdings.css'

export default function Holdings() {
    return (
        <div className="holdings">
            <h1>Current Holdings</h1>
            <HoldingsCard />
            <HoldingsCard />
        </div>
    )
}