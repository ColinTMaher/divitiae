import React, { useContext } from "react"
import { db } from "../../firebase"
import { AuthContext } from "../../Auth"
import { TableCell, SvgIcon, Button, IconButton } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/Styles"

// Icons.
import FlightIcon  from '@material-ui/icons/Flight'
import PublicIcon from '@material-ui/icons/Public'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import FavoriteIcon from '@material-ui/icons/Favorite'
import HouseIcon from '@material-ui/icons/House'
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    icon: {
        textAlign: "center"
    },
    text: {
        
    },
    name: {
        
    },
    date: {
        fontSize: "0.8em"
    },
    amount: {
        textAlign: "right"
    },
    delete: {
        textAlign: "center"
    }
})

function SpendingItem(props) {
    const {name, amount, category, timestamp} = props.item
    const authContext = useContext(AuthContext)
    const classes = useStyles()

    var icon

    switch(category) {
        case "general":
            icon = PublicIcon;
            break
        case "groceries": 
            icon = ShoppingBasketIcon;
            break
        case "travel":
            icon = FlightIcon;
            break
        case "transport":
            icon = DirectionsBusIcon;
            break
        case "restaurant":
            icon = RestaurantIcon;
            break
        case "health":
            icon = FavoriteIcon;
            break
        case "utilities":
            icon = HouseIcon;
            break
        default: 
            break
    }

    let date = new Date(timestamp)
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes()
    var seconds = "0" + date.getSeconds()
    var formattedTime = hours + ':' + minutes.substr(-2) /* + ':' + seconds.substr(-2) */
    var day = pad(date.getDay())
    var month = pad(date.getMonth())
    var year = pad(date.getFullYear())

    function pad(n) {
        return (n < 10) ? ("0" + n) : n;
    }

    function remove() {
        db.collection(`${authContext.currentUser.uid}/spending/items`).doc(props.itemId).delete()
    }

    return (
        <>
            <TableCell className={classes.icon}>
                <SvgIcon component={icon} />
            </TableCell>
            <TableCell className={classes.text}>
                <div className={classes.name}>{name}</div>
                <div className={classes.date}>{`${day}/${month}/${year}`}</div>
            </TableCell>
            <TableCell className={classes.amount}>
                €{amount}{/* €{amount.toFixed(2)} */}
            </TableCell>
            <TableCell className={classes.delete}>
                <IconButton aria-label="delete" onClick={() => remove()}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>       
        </>
    )
}

export default SpendingItem