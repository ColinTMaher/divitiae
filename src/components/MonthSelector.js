import React from "react"

function Total(props) {
    return (
        <div className={`month-selector card ${props.width}`}>
            <form>
            <select className="dropdown">
                <option value="">-Select Month-</option>
                <option value="january">January</option>
                <option value="january">February</option>
                <option value="january">March</option>
                <option value="january">April</option>
                <option value="january">May</option>
                <option value="january">June</option>
                <option value="january">July</option>
                <option value="january">August</option>
                <option value="january">September</option>
                <option value="january">October</option>
                <option value="january">November</option>
                <option value="january">December</option>
            </select>
            </form>
        </div>    
    )
}

export default Total