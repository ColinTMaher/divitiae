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

import { purple, green, orange, red } from '@material-ui/core/colors';
import { PlayCircleOutline } from '@material-ui/icons';

const useStyles = makeStyles({
  background: {
    height: "100vh",
    borderRadius: 0
  },
  container: {
    padding: "10px"
  }
})



function App() {
  const [darkMode, setDarkMode] = useState(false)
  const classes = useStyles()

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? green[500] : orange[500]
      },
      secondary: {
        main: darkMode ? purple[500] : red[500]
      },
    },
    overrides: {
      MuiCard: {
        root: {
          padding: "15px 10px"
        }
      },
     /*  MuiButton: {
        contained: {
          color: 'blue',
          padding: 10,
        },
      }, */
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Container className={classes.container} maxWidth="sm">
            <Grid container spacing={1}>
              <CssBaseline />
                <Switch>
                  <Route path="/signin" component={SignIn} />
                  <Route path="/signup" component={SignUp} />
                  <PrivateRoute path="/spending" component={Spending} />
                  <PrivateRoute path="/settings">
                    <Settings darkMode={darkMode} setDarkMode={setDarkMode}/>  
                  </PrivateRoute>
                  <PrivateRoute path="*" component={Dashboard} />
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


