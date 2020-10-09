import React from "react"
import Total from "./Total"

function Dashboard() {
    return (
        <main className="dashboard">   
{/*             <div className="overview">
                <Total title="Spending" amount={256.50}/>
                <Total title="Income" amount={1050.00}/>
            </div>  */} 
            <div className="content container">
                <div className="card">1</div>
                <div className="card">2</div>
                <div className="card">3</div>
            </div>
        </main>
    )
}

export default Dashboard