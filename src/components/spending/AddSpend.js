import React, { useEffect, useState } from "react"
import {db} from "../../firebase"
import {useForm} from "react-hook-form"
import { Button, Input, Select, MenuItem } from "@material-ui/core"

function AddSpend(props) { 
    const {register, handleSubmit, errors} = useForm()
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("")

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }
    function onSubmit() {
       let date = new Date()

        const spend = {
            name: name,
            amount: amount,
            category: category,
            timestamp: date.getTime()
        }

        db.collection(props.collection).doc().set(spend) 
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="text" 
                name="name" 
                placeholder="Name" 
                value={name}
                onChange={handleNameChange}
            />
            <br/>
            <Input 
                type="number" 
                min="0.01" 
                step="0.01"
                name="amount" 
                placeholder="Amount" 
                value={amount}
                onChange={handleAmountChange}

            />
            <br/>
            <br/>
            <Select name="category" value={category} onChange={handleCategoryChange}
>
                <MenuItem value="general">General</MenuItem>
                <MenuItem value="travel">Travel</MenuItem>
                <MenuItem value="groceries">Groceries</MenuItem>
            </Select>
            <br/>
            <br/>
            <Button color="primary" variant="contained" onClick={onSubmit}>Add Item</Button>
        </form>
    )
}

export default AddSpend