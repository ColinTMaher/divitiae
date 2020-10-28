import { useState, useEffect } from "react"
import {  Paper, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Fab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom' 
import FlightIcon  from '@material-ui/icons/Flight'
import PublicIcon from '@material-ui/icons/Public'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import FavoriteIcon from '@material-ui/icons/Favorite'
import HouseIcon from '@material-ui/icons/House'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import AddIcon from '@material-ui/icons/Add'
import { useAuth } from 'contexts/AuthContext'
import { db } from 'firebase.js'

const useStyles = makeStyles({
    card: {
        padding: "10px"
    },
    list: {
        padding: 0,
    },
    listItem: {
        borderRadius: "5px",
        padding: 25,
    },
    listItemText: {
    
    },
    fab: {
        position: "absolute",
        bottom: 75, 
        right: 20
    }
})
  
function createData(name, calories, color) {
    return { name, calories, color};
}
  
const rows = [
    createData('Frozen yoghurt', 159, "red", 24, 4.0),
    createData('Ice cream sandwich', 237, "blue", 37, 4.3),
    createData('Eclair', 262, "orange"),
    createData('Cupcake', 305, "green"),
    createData('Gingerbread', 356, "purple"),
]


function Spending() {
    const classes = useStyles()
    const { currentUser } = useAuth()
    const [spendingData, setSpendingData] = useState([])

    function getData() {
        db.collection(`${currentUser.uid}/spending/items`).onSnapshot(snapshot => {
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

    useEffect(() => {
        getData()
    }, [])

    const spendingItems = spendingData.map(item => 
        <ListItem key={item.name} button className={classes.listItem} style={{borderLeft: `15px solid ${item.color}`}} >
            <ListItemAvatar>
                <Avatar>
                    {item.category===""? <PublicIcon /> : null}
                    {item.category==="general"? <PublicIcon /> : null}
                    {item.category==="groceries"? <ShoppingBasketIcon /> : null}
                    {item.category==="transport"? <DirectionsBusIcon /> : null}                           
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.name} className={classes.listItemText}/>    
{/*             <ListItemText primary={`${item.date}`} className={classes.listItemText}/>      
 */}            <ListItemText primary={`€${item.amount}`} className={classes.listItemText}/>     
        </ListItem>
    ) 
    return (
        <>
            <List className={classes.list} aria-label="mailbox folders" component={Paper}>
                {spendingItems}
            </List>
            <Fab size="medium" color="secondary" aria-label="add" className={classes.fab} component={Link} to="/spending/add">
                <AddIcon />
            </Fab>                  
        </>
        
    )
}

export default Spending