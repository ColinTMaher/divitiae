import React, { useState, useEffect } from "react"

function Details(props) {
    return (
        <div className="detail">
            <p>{props.name} : €{props.amount}</p>
        </div>
    )
}

export default Details