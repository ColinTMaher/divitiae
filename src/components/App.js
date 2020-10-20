import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom"
import { Paper, Grid, Container, Card } from '@material-ui/core'
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/Styles"
import CssBaseline from '@material-ui/core/CssBaseline';

import { AuthProvider } from '../Auth'
import PrivateRoute from "../PrivateRoute"

import Dashboard from "./Dashboard"
import Spending from "./spending/Spending"
import Settings from "./settings/Settings"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Navbar from './Navbar';
import AuthForm from "./AuthForm"

import { purple, green, orange, red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  background: {
    height: "100vh",
    borderRadius: 0
  },
  container: {
    padding: "10px",
  }
})

function App(props) {
  const [darkMode, setDarkMode] = useState(false)
  const classes = useStyles()

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#1D2F3B" : "#F0F0F0" 
      },  
      primary: {
        main: darkMode ? purple[500] : orange[500]
      },
      secondary: {
        main: darkMode ? purple[500] : red[500]
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            userSelect: "none"
          },
        },
      },
      MuiCard: {
        root: {
          background: darkMode ? "#1C2A35" : "white",
          padding: "15px 10px",
        }
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <CssBaseline />
          <Container className={classes.container} maxWidth="sm">
            <Grid container spacing={1} justify="center">
                <Switch>
                  <Route 
                    path={["/signin", "/signup"]} 
                    component={AuthForm} 
                  />
                  <PrivateRoute 
                    path="/spending" 
                    component={Spending} 
                  />
                  <PrivateRoute 
                    path="/settings" 
                    component={Settings} 
                    data = {{
                      setDarkMode : setDarkMode,
                      darkMode : darkMode 
                    }}
                  />
                  <PrivateRoute 
                    path="*" 
                    component={Dashboard} 
                  />
                </Switch>
            </Grid>
          </Container>
          <Navbar />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App


