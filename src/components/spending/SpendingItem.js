import React, { useContext } from "react"
import { db } from "../../firebase"
import { AuthContext } from "../../Auth"
import { TableCell, SvgIcon, Button, IconButton, Typography, Icon} from "@material-ui/core"

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
    cell: {
        
    },
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
        textAlign: "right",
        paddingRight: "30px"
    },
    delete: {
        textAlign: "center"
    }
})

function SpendingItem(props) {
    const {name, amount, category, timestamp} = props.item
    const authContext = useContext(AuthContext)
    const classes = useStyles()
    
/*     const [screen, setScreen] = useState("")
 */    var icon

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
            <TableCell className={[classes.icon, classes.cell].join(' ')}>
                <Icon component={icon} style={{ fontSize: 35 }}/>
            </TableCell>
            <TableCell className={[classes.text, classes.cell].join(' ')}>
                <Typography variant="body1">
                    <span className={classes.name}>{name}</span>
                </Typography> 
                <Typography variant="subtitle1">
                    <span className={classes.date}>{`${day}/${month}/${year}`}</span>
                </Typography>
            </TableCell>
            <TableCell className={[classes.amount, classes.cell].join(' ')}>
                <Typography variant="body1">{amount}€{/* €{amount.toFixed(2)} */}</Typography>
            </TableCell>
{/*             <TableCell className={classes.delete}>
                <IconButton aria-label="delete" onClick={() => remove()}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>    */}
        </>
    )
}

export default SpendingItem