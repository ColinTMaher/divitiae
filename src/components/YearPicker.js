import React from "react"

function YearPicker(props) {
    return (
        <div className={`year-picker card`}>
            <form>
                <select className="dropdown" defaultValue={2020}>
                <option value="2020">2020</option>
                <option value="2020">2019</option>
                <option value="2020">2018</option>
                <option value="2020">2017</option>
                <option value="2020">2016</option>
                <option value="2020">2015</option>
                </select>
            </form>
        </div>    
    )
}

export default YearPicker