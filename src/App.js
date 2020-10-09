import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Navbar from "./components/Navbar"
import Main from "./components/Dashboard"
import Settings from "./components/Settings"


/* import Navbar from "./components/Navbar"
import Total from "./components/Total"
import MonthSelector from "./components/MonthSelector"
import Details from "./components/Details" */


import './style/style.css'

/* data = {
  {

  }
} */

function App() {
  return (
    <Router>
        <div>
          <div class="main">
            <Switch>
              <Route path="/Dashboard">
                <Main />
              </Route>
              <Route path="/Settings">
                <Settings />
              </Route>    
            </Switch>
          </div>   
          <Navbar />
        </div>
    </Router>
   
  )
}

export default App
