import React, { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUtensils } from "@fortawesome/free-solid-svg-icons"
import { faGamepad } from "@fortawesome/free-solid-svg-icons"
import { faBus } from "@fortawesome/free-solid-svg-icons"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons"
import { faPlane } from "@fortawesome/free-solid-svg-icons"
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons"
import { faBolt } from "@fortawesome/free-solid-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { db } from "../../firebase"
import { AuthContext } from "../../Auth"
import { Grid, Card } from "@material-ui/core"

function SpendingItem(props) {
    const {name, amount, category, timestamp} = props.item
    const authContext = useContext(AuthContext)

    var icon

    switch(category) {
        case "general":
            icon = faGlobe;
            break
        case "groceries": 
            icon = faShoppingBasket;
            break
        case "travel":
            icon = faPlane;
            break
        case "transport":
            icon = faBus;
            break
        case "food":
            icon = faUtensils;
            break
        case "health":
            icon = faHeartbeat;
            break
        case "utilities":
            icon = faBolt;
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
        <Grid container item xs="12"> 
            <Grid item xs="3">
                <div className="icon">
                    <FontAwesomeIcon icon={icon} />
                </div>
            </Grid>
            <Grid item xs="3">
                <div className="text">
                    <div className="name">{name}</div>
                    <div className="date">{`${day}/${month}/${year}`}</div>
                </div>
            </Grid>
            <Grid item xs="3">
                <div className="amount">
                    €{amount}{/* €{amount.toFixed(2)} */}
                </div>
            </Grid>
            <Grid item xs="3">
                <div className="delete-btn">
                    <a onClick={remove}>X</a>
                </div>
            </Grid>       
        </Grid>
    )
}

export default SpendingItem