import React from "react"
import Detail from "./Detail"
function Details(props) {
    return (
        <div className={`details card ${props.width}`}>
            <Detail name="Drink" amount={5.60} />
            <Detail name="Food" amount={9.30} />
            <Detail name="Flights" amount={47.60} />
            <Detail name="Stuff" amount={14.35} />         
        </div> 
    )
}

export default Details