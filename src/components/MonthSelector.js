import React, { useState, useEffect } from "react"

function Total(props) {
    return (
        <div className="month-selector">
            <form>
                <select className="dropdown">
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </select>
            </form>
        </div>
    )
}

export default Total