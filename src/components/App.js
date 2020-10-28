import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from 'PrivateRoute'
import { AuthProvider } from 'contexts/AuthContext'

import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

// Material UI. 
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Container, Grid, Button } from '@material-ui/core'
// Components.
import SignIn from 'components/SignIn'
import Navbar from 'components/Navbar'
import Dashboard from 'components/dashboard/Dashboard'
import Spending from 'components/spending/Spending'
import AddSpend from 'components/spending/AddSpend'
import Income from 'components/income/Income'
import Settings from 'components/settings/Settings'
// Contexts. 

const useStyles = makeStyles({
  mainContainer: {
    padding: 10,
    marginBottom: 55
  }
})

function App() {
  const classes = useStyles()
  const [darkMode, setDarkMode] = useState(false)

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            userSelect: "none",
          },
        },
      },
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AuthProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Container className={classes.mainContainer} maxWidth="xs" justify="center">
              <Switch>
                <PrivateRoute exact path={["/", "/dashboard"]} component={Dashboard} />
                <PrivateRoute exact path="/spending" component={Spending} />
                <PrivateRoute exact path="/spending/add" component={AddSpend} />
                <PrivateRoute exact path="/income" component={Income} />
                <PrivateRoute exact path="/settings" component={Settings} data = {{setDarkMode : setDarkMode, darkMode : darkMode }}/>
                <Route exact path={["/signin", "/signup"]} component={SignIn} />
              </Switch>
            </Container>
            <Navbar />   
            </MuiPickersUtilsProvider>
        </AuthProvider> 
      </Router>      
    </ThemeProvider>
  )
}

export default App
