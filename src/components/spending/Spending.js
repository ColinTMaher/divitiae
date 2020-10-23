import React, { useEffect, useState, useContext } from "react"
import { Link } from 'react-router-dom'

import { Grid, Card, Table, TableCell, TableRow, ButtonBase, TableHead, TableBody, Icon, IconButton, TextField} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/Styles"
import Fab from '@material-ui/core/Fab'

import AddIcon from '@material-ui/icons/Add'

import SpendingItem from "./SpendingItem"
import { auth, db } from "firebase.js"

const useStyles = makeStyles((theme) => ({
    card: {
        textAlign: "center"
    },
    searchCard: {
        padding: 0,
        height: "100%"
    },
    search: {
        width: "100%",
        padding: "5px"
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
    },
    buttonBase: {
        width: "100%",
        height: "100%"
    },
    arrowBtn: {
        width: "100%",
        height: "100%"
    },
    headerRow: {
        textAlign: "center"
    },
    headerCell: {
        textAlign: "right",
        margin: "auto",
    },
    search: {
        
    },
    fab: {
        position: "fixed",
        bottom: "70px",
        right: "25px"
    },
}))

function Spending() {
    const [spendingData, setSpendingData] = useState([])

    const classes = useStyles()
    const collection = `${auth.currentUser.uid}/spending/items`
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
        <TableRow key={item.id} onClick={() => handleClick(item.id)}>
            <SpendingItem key={item.id} item={item} userId={auth.currentUser.uid} itemId={item.id}/>
        </TableRow> 
    ) 


    spendingData.sort((a,b) => (a.timestamp > b.timestamp) ? 1 : ((b.timestamp > a.timestamp) ? -1 : 0)) 
    return (
        <>
            <Grid item xs={12}>
                <Card className={[classes.card, classes.spendingList].join(' ')} >
                    <Table>
                        <TableBody>
                            {spendingItems}
                        </TableBody>
                    </Table>
                </Card>
            </Grid>
            <Fab size="medium" color="secondary" aria-label="add" className={classes.fab} component={Link} to="/spending/add">
                <AddIcon />
            </Fab>
        </>
    )
}

export default Spending