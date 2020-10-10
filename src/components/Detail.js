import React from "react"

function Details(props) {
    return (
        <div className="detail grid">
                <div id="name">
                    {props.name} 
                </div>
                <div className="amount">
                    €{props.amount}
                </div>
                <div className="Edit">
                    <button>Edit</button>
                </div>
                <div className="delete">
                    <button>X</button>
                </div>
        </div>
    )
}

export default Details