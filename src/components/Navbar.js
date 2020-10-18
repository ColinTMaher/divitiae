import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { Link, useLocation } from 'react-router-dom';


const useStyles = makeStyles(() => ({
    navbar : {
        width: "100%",
        position: 'fixed',
        bottom: 0,
        alignItems: "center"
    }
}))

function Navbar() {
    const [value, setValue] = useState(getSelected(useLocation().pathname))
    const classes = useStyles()
    
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
                    label="Settings" 
                    icon={<SettingsIcon />} 
                    to="/settings"
                />
            </BottomNavigation>
    )
}

export default Navbar