import React from "react"
import Total from "./Total"

function Main() {
    return (
        <main className="main">   
{/*             <div className="overview">
                <Total title="Spending" amount={256.50}/>
                <Total title="Income" amount={1050.00}/>
            </div>  */} 
            <div className="content container">
                <div className="card">1</div>
                <div className="card">2</div>
                <div className="card">3</div>
                <div className="card">4</div>
                <div className="card">5</div>
                <div className="card">6</div>
                <div className="card">7</div>
                <div className="card">8</div>
            </div>
        </main>
    )
}

export default Main