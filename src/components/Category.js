import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Category(props) {
    const [category, setCategory] = useState(props.category)
    const [amount, setAmount] = useState(props.amount)

    return (
        <div className="category card">
            <div className="icon">
                <FontAwesomeIcon icon={props.icon} />  
            </div>
            <div className="text">
                {category}
                <div className="subtitle">
                    {props.items} items
                </div>
            </div>
            <div className="amount">€{amount}</div>
        </div>  
    )
}

export default Category