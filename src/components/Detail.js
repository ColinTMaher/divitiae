import React from "react"

function Details(props) {
    return (
        <div className="detail">
                {props.name} 
                €{props.amount}
                <button>Edit</button>
               <button>X</button>
        </div>
    )
}

export default Details