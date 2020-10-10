import React from "react"

function DatePicker(props) {
    return (
        <div className={`month-picker card`}>
            <form>
            <select className="dropdown" defaultValue="October">
                <option value="january">January</option>
                <option value="january">February</option>
                <option value="january">March</option>
                <option value="january">April</option>
                <option value="january">May</option>
                <option value="january">June</option>
                <option value="january">July</option>
                <option value="january">August</option>
                <option value="january">September</option>
                <option value="October">October</option>
                <option value="january">November</option>
                <option value="january">December</option>
            </select>
            </form>
        </div>    
    )
}

export default DatePicker