import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom"
import { Paper, Grid, Container } from '@material-ui/core'
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

const useStyles = makeStyles({
  background: {
    height: "100vh",
    borderRadius: 0
  }
})

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const classes = useStyles()

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Container maxWidth="sm">
            <CssBaseline />
              <Switch>
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <PrivateRoute path="/spending" component={Spending} />
                <PrivateRoute path="/settings" component={Settings} />
                <PrivateRoute path="*" component={Dashboard} />
              </Switch>
          </Container>
          <Navbar />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App


