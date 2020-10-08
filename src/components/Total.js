import React, { useState, useEffect } from "react"

function Total(props) {
    const [title, setTitle] = useState(props.title)
    const [total, setTotal] = useState(props.amount)

    return (
        <div className="total">
            <div className="title">{title}</div>
            <div className="amount">€{total}</div>
        </div>
    )
}

export default Total