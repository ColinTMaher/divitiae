import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Grid, Container } from '@material-ui/core'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/Styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { AuthProvider } from '../Auth'
import PrivateRoute from '../PrivateRoute'

import Dashboard from './dashboard/Dashboard'
import Spending from './spending/Spending'
import Navbar from './Navbar'
import AuthForm from './auth/AuthForm'
import Header from './Header'
import Income from './income/Income'
import AddSpend from './spending/AddSpend'

import { orange, red } from '@material-ui/core/colors'

const useStyles = makeStyles({
  background: {
    height: "100vh",
    borderRadius: 0
  },
  container: {
    padding: "10px",
    marginBottom: "55px"
  }
})

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const classes = useStyles()

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#202C39" : "#F0F0F0" 
      },  
      primary: {
        main: darkMode ? "#FF6666" : orange[500]
      },
      secondary: {
        main: darkMode ? "#CCFF66" : red[500]
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
          background: darkMode ? "#283845" : "white",
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
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Container className={classes.container} maxWidth="sm">
              <Grid container spacing={1} justify="center">
                  <Switch>
                    <PrivateRoute exact path="/spending" component={Spending} />
                    <PrivateRoute exact path="/spending/add" component={AddSpend} />
                    <PrivateRoute exact path="/income" component={Income} />
                    <PrivateRoute exact path={["/", "/dashboard"]} component={Dashboard} />
                    <Route path={["/signin", "/signup"]} component={AuthForm} />
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


