import React, { useEffect, useState } from "react"
import {db} from "../../firebase"
import {useForm} from "react-hook-form"

function AddSpend(props) { 
    const {register, handleSubmit, errors} = useForm()

    function onSubmit(data) {
        let date = new Date()

        const spend = {
            name: data.name,
            amount: data.amount,
            category: data.category,
            timestamp: date.getTime()
        }

        db.collection(props.collection).doc().set(spend)
    }

    return (
        <div className="add-spend-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    ref={register({required: "Name required"})}             
                />
                <input 
                    type="number" 
                    min="0.01" 
                    step="0.01"
                    name="amount" 
                    placeholder="Amount" 
                    ref={register({required: "Amount required"})}
                />
                <select name="category" ref={register}>
                    <option value="general">General</option>
                    <option value="travel">Travel</option>
                    <option value="groceries">Groceries</option>
                </select>
{/*                 {errors.}
 */}                <button>Add Item</button>
            </form>
        </div>
    )
}

export default AddSpend