import { useState } from "react"
import { Card, TextField, Paper, Button, TextareaAutosize, Select, MenuItem, FormControl, InputLabel } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

import { KeyboardDatePicker} from '@material-ui/pickers'
import { db } from 'firebase.js'
import { useAuth } from 'contexts/AuthContext'

const useStyles = makeStyles((theme) => ({
    card: {
        padding: 20,
        textAlign: "center"
    },
    input: {
        marginBottom: 15
    },
    button: {
        marginTop: 20
    }
}))


function AddSpend() {
    const history = useHistory()
    const classes = useStyles()
    const { currentUser } = useAuth()
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [color, setColor] = useState("")
    const [date, setDate] = useState(null)

    function handleSubmit(event) {
        event.preventDefault()
      
        const spend = {
            name: name,
            amount: amount,
            description: description,
            category: category,
            color: color,
            date: date.getTime()
        }

        console.log(`${currentUser.uid}/spending/items`)

        db.collection(`${currentUser.uid}/spending/items`).doc().set(spend).then(() => {
            history.goBack()
        }) 
    }   

    function handleDateChange(date) {
        setDate(date)
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <Paper className={classes.card}>
                <TextField 
                    className={classes.input}
                    value={name}
                    type="name"
                    onChange={event => setName(event.target.value)}
                    fullWidth
                    label="Name"
                    variant="outlined" 
                    required
                />    
                <TextField 
                    className={classes.input}
                    value={amount}
                    type="number"
                    min="0.01" 
                    step="0.01"
                    onChange={event => setAmount(event.target.value)}
                    fullWidth
                    label="Amount"
                    variant="outlined" 
                    required
                />   
                <TextField 
                    className={classes.input}
                    value={description}
                    type="text"
                    onChange={event => setDescription(event.target.value)}
                    fullWidth
                    label="Description"
                    variant="outlined" 
                />          
                <KeyboardDatePicker
                    fullWidth
                    disableToolbar
                    inputVariant="outlined"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date"
                    value={date}
                    onChange={handleDateChange}
                    className={classes.input}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    required
                    style={{marginTop: 0}}
                />  
                <FormControl variant="outlined" className={classes.input} fullWidth>
                    <InputLabel htmlFor="category-select">Category</InputLabel>
                    <Select
                        native

                        value={category}
                        onChange={event => setCategory(event.target.value)}
                        label="Category"
                        inputProps={{
                            name: 'category',
                            id: 'category-select',
                        }}
                        >
                        <option aria-label="None" value="" />
                        <option value={"general"}>General</option>
                        <option value={"groceries"}>Groceries</option>
                        <option value={"transport"}>Transport</option>
                    </Select>
                </FormControl>  
                <FormControl variant="outlined" className={classes.input} fullWidth>
                    <InputLabel htmlFor="category-select">Colour</InputLabel>
                    <Select
                        native
                        value={color}
                        onChange={event => setColor(event.target.value)}
                        label="Colour"
                        inputProps={{
                            name: 'color',
                            id: 'color-select',
                        }}
                        >
                        <option aria-label="None" value="" />
                        <option value={"red"}>Red</option>
                        <option value={"green"}>Green</option>
                        <option value={"blue"}>Blue</option>
                    </Select>
                </FormControl>  
                <Button 
                    className={classes.button} 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    size="large"
                    type="submit"
                >
                    Add Spend     
                </Button>   
            </Paper>   
        </form>
    )
}

export default AddSpend