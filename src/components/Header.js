import React, { useContext, useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@material-ui/core'
import { AuthContext } from 'Auth'
import { auth } from 'firebase.js'

// Icons
import MoreVertIcon from '@material-ui/icons/MoreVert'
import MenuIcon from '@material-ui/icons/Menu'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

function Header(props) {
  let history = useHistory()
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const {currentUser} = useContext(AuthContext)
  const [showBackButton, setShowBackButton] = useState(false)

  let location = useLocation()
  useEffect(() => {
    let showBtn = false
    location.pathname === "/spending/add" ? showBtn = true : showBtn = false
    //location.pathname === "/spending/add" ? setShowBackButton(true) : setShowBackButton(false)

    showBtn ? setShowBackButton(true) : setShowBackButton(false)
  }, [location])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  function handleDarkMode() {
    handleClose()
    // Toggle dark mode. 
    props.setDarkMode(!props.darkMode) 
  }

  function handleSignOut() {
    handleClose()
    auth.signOut()
  }

  function handleBackClick() {
    history.goBack() 
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{display: `${currentUser ? "flex" : "none" }`}}>
        <Toolbar>
          { 
            showBackButton 
            ?
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleBackClick}>
              <ArrowBackIcon />
            </Button>
            :
            null
          }

          <Typography variant="h6" className={classes.title}>
            Divitiae
          </Typography>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MoreVertIcon />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleDarkMode}>
              {props.darkMode ? "Light Theme" : "Dark Theme"}
            </MenuItem>
            <MenuItem onClick={handleSignOut}>
              Sign Out
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header