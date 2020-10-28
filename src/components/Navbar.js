import { useEffect, useState } from "react"
import { Link, useLocation } from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction }from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined'
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined'
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import { useAuth } from 'contexts/AuthContext'

const useStyles = makeStyles({
    navbar: {
        overflow: "hidden",
        position: "fixed",
        bottom: 0,
        width: "100%"
    },
})

function Navbar() {
    const classes = useStyles()
    const [value, setValue] = useState()
    const location = useLocation().pathname
    const { currentUser } = useAuth()
    
    useEffect(() => {
        setValue(location)
    }, [location]) 

    return (
        <BottomNavigation 
            value={value} 
            className={classes.navbar} 
            onChange={(event, newValue) => {setValue(newValue)}} 
            showLabels
            style={{display: `${currentUser ? "flex" : "none" }`}}
        >
            <BottomNavigationAction 
                label="Dashboard" 
                value="/dashboard" 
                icon={<DashboardOutlinedIcon />} 
                component={Link}
                to="/dashboard"
            />
            <BottomNavigationAction 
                label="Spending" 
                value="/spending" 
                icon={<CreditCardOutlinedIcon />} 
                component={Link}
                to="/spending"

            />
            <BottomNavigationAction 
                label="Income" 
                value="/income" 
                icon={<AccountBalanceOutlinedIcon />} 
                component={Link}
                to="/income"

            />
            <BottomNavigationAction 
                label="Settings" 
                value="/settings" 
                icon={<SettingsOutlinedIcon />} 
                component={Link}
                to="/settings"
            />
        </BottomNavigation>
    )
}

export default Navbar