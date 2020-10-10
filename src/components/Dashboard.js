import React from "react"
import Total from "./Total"
import Categories from "./Categories"
import MonthPicker from "./MonthPicker"
import YearPicker from "./YearPicker"
import Details from "./Details"

function Dashboard() {
    return (
        <div className="dashboard">   
            <MonthPicker/>
            <YearPicker/>
            <Total title="Spending" amount={256.50}/>
            <Total title="Income" amount={1050.00}/>
            <Categories />
        </div>
    )
}

export default Dashboard