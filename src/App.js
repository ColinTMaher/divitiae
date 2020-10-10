import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"
import Settings from "./components/Settings"
import Analytics from "./components/Analytics"

/* import Navbar from "./components/Navbar"
import Total from "./components/Total"

import Details from "./components/Details" */


import './style/style.css'

/* data = {
  {

  }
} */

function App() {
  return (
      <Router>  
        <main className="main">
          <div className="center">
            <Switch>
                <Route path="/Settings" component={Settings} /> 
                <Route path="/Analytics" component={Analytics} /> 
                <Route path={["/Dashboard", "/"]} component={Dashboard} />
            </Switch>
          </div>      
        </main>  
        <Navbar /> 
      </Router>      
  )
}

export default App
