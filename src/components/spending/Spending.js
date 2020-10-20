import React, { useEffect, useState, useContext } from "react"
import SpendingItem from "./SpendingItem"
import {auth, db} from "../../firebase"
import { AuthContext } from "../../Auth"
import { Grid, Card, MenuItem, Select, Button, Input, Table, TableCell, TableRow, Link, ButtonBase} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/Styles"

const useStyles = makeStyles({
    card: {
        textAlign: "center"
    },
    search: {
        height: "100%",
        marginRight: "20px",
        width: "50%"
    },
    sort: {
        width: "100%",
        height: "100%"
    },
    searchBtn: {
        width: "20%"
    },
    spendingList: {
        padding: 0,
        '&:selected': {
            background: "black"
        }

    },
    clickable: {
        width: "100%",
        padding: 0
    },
    row: {
        width: "100%",
        padding: 0
    }
})

function Spending() {
    const authContext = useContext(AuthContext)
    const classes = useStyles()
 
    const collection = `${authContext.currentUser.uid}/spending/items`
    const [spendingData, setSpendingData] = useState([])

    const ref = db.collection(collection) 
    
    function getData() {
        ref.onSnapshot(snapshot => {
            let data = []
            if(snapshot.size) {
                snapshot.forEach(doc => {
                    let temp = doc.data()
                    temp.id = doc.id
                    data.push(temp) 
                })
                setSpendingData(data)
            } else {
                setSpendingData([])
            }
        })
    }

    function handleClick(id) {
        console.log(id)
    }
   
    useEffect(() => {
        getData()
    }, [])

    const spendingItems = spendingData.map(item => 
        <TableRow onClick={() => handleClick(item.id)}>
            <SpendingItem key={item.id} item={item} userId={authContext.currentUser.uid} itemId={item.id}/>
        </TableRow> 

    ) 

    spendingData.sort((a,b) => (a.timestamp > b.timestamp) ? 1 : ((b.timestamp > a.timestamp) ? -1 : 0)) 
    
    return (
            <>
            {/* <Grid item xs={10}>
                <Card className={classes.card}>
                    <Input className={classes.search} type="text" placeholder="search"></Input>       
                    <Button className={classes.searchBtn} color="primary" variant="contained">Search</Button>        
                </Card>     
            </Grid>
            <Grid item xs={2}>
                <Card className={classes.card}>
                    <Select className={classes.sort}>
                        <MenuItem>-Sort By-</MenuItem>
                        <MenuItem>Date</MenuItem>
                        <MenuItem>Amount</MenuItem>
                        <MenuItem>Category</MenuItem>
                    </Select>                
                </Card>     
            </Grid>
            <Grid item xs={3}>
                <Card className={classes.card}>
                    {"<"}
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card className={classes.card}>
                    <select className="date-selector">
                        <option value="October">October 2020</option>
                        <option value="january">August 2020</option>
                        <option value="january">July 2020</option>
                        <option value="january">June 2020</option>
                        <option value="january">May 2020</option>
                        <option value="january">April 2020</option>
                        <option value="january">March 2020</option>
                        <option value="january">February 2020</option>
                        <option value="january">January  2020</option>     
                    </select>
                </Card>   
            </Grid>
            <Grid item xs={3}>
                <Card className={classes.card}>
                    {">"} 
                </Card>
            </Grid> */}
            <Grid item xs={12}>
                <Card className={[classes.card, classes.spendingList]} >
                    <Table>
                        {spendingItems}
                    </Table>
                </Card>
            </Grid>
            </>
    )
}

export default Spending