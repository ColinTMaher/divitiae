import React from "react"
import Total from "./Total"
import Details from "./Details"
import MonthSelector from "./MonthSelector"

function Dashboard() {
    return (
        <div className="dashboard">   
            <MonthSelector width="w-6"/>
            <Total title="Spending" amount={256.50} width="w-3"/>
            <Total title="Income" amount={1050.00} width="w-3"/>
            <Details width="w-6"/>
        </div>
    )
}

export default Dashboard