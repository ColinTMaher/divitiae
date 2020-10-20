import React, { useEffect, useState } from "react"
import {db} from "../firebase"
import {useForm} from "react-hook-form"
import { Button, Input, Select, MenuItem, TextField, FormControl, InputLabel, Grid, Card} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
}))

function AddSpend(props) { 
    const classes = useStyles()

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
        <Grid item xs={12}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card className={[classes.card, classes.spendingList]} >
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