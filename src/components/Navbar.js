// Imports
import React, { useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import { AuthContext } from "../Auth"

import DashboardIcon from '@material-ui/icons/Dashboard'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'

const useStyles = makeStyles(() => ({
    navbar : {
        width: "100%",
        position: 'fixed',
        bottom: 0,
        alignItems: "center"
    }
}))

function Navbar(props) {
    const [value, setValue] = useState(getSelected(useLocation().pathname))
    const classes = useStyles()
    const {currentUser} = useContext(AuthContext)


    function getSelected(path) {
        switch(path) {
            case "/dashboard": return 0
            case "/spending": return 1
            case "/settings": return 2
            default: return 0
        }  
    }

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue)
            }}
            showLabels
            className={classes.navbar}
            style={{display: `${currentUser ? "flex" : "none" }`}}
        >
            <BottomNavigationAction 
                component={Link}
                className={classes.navBtn}
                label="Dashboard" 
                icon={<DashboardIcon />} 
                to="/dashboard"
            />
            <BottomNavigationAction 
                component={Link}
                className={classes.navBtn}
                label="Spending" 
                icon={<CreditCardIcon />}
                to="/spending"
            />
            <BottomNavigationAction 
                component={Link}
                className={classes.navBtn}
                label="Income" 
                icon={<AccountBalanceIcon />}
                to="/income"
            />
        </BottomNavigation>
    )
}

export default Navbar