

import React, { useState } from "react"
import { db, auth } from "firebase.js"
import { useForm } from "react-hook-form"
import { Button, Select, MenuItem, TextField, FormControl, InputLabel, Grid, Card } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

import 'date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    card: {
        width: "fit-content",
        textAlign: "center",
        margin: "auto",
        padding: "20px 50px"
    }
}))

function AddSpend(props) { 
    const classes = useStyles()
    let history = useHistory()

    const {register, handleSubmit, errors} = useForm()
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("")
    const [date, setDate] = useState(new Date())

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleAmountChange = (event) => {
        setAmount(event.target.value)
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }

    const handleDateChange = (date) => {
        setDate(date)
    }

    // The first commit of Material-UI

    function onSubmit() {
        console.log(name + " " + amount + " " + category)
        
        const spend = {
            name: name,
            amount: amount,
            category: category,
            timestamp: date.getTime()
        }

        db.collection(`${auth.currentUser.uid}/spending/items`).doc().set(spend).then(() => {
            history.goBack()
        }) 
    }   

    return (
        <Grid item xs={12}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card className={classes.card} >
                    <TextField
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={name}
                        onChange={handleNameChange}
                        id="outlined-with-placeholder"
                        label="Name"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <br/>
                    <TextField
                        type="number" 
                        min="0.01" 
                        step="0.01"
                        name="amount" 
                        placeholder="Amount" 
                        value={amount}
                        onChange={handleAmountChange}
                        id="outlined-with-placeholder"
                        label="Amount"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <br/>
                    <br/>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={date}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />

                    </MuiPickersUtilsProvider>
                    <br/>
                    <br/>
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={category}
                                onChange={handleCategoryChange}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="general">General</MenuItem>
                            <MenuItem value="travel">Travel</MenuItem>
                            <MenuItem value="groceries">Groceries</MenuItem>
                        </Select>
                    </FormControl>
                    <br/>
                    <br/>
                    <Button color="primary" variant="contained" onClick={onSubmit}>Add Item</Button>
                </Card>
            </form>
        </Grid>
    )
}

export default AddSpend