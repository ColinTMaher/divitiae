import React from 'react'
import '../style/style.css'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Dashboard from "./Dashboard"
import Analytics from "./Analytics"
import Settings from "./Settings"
import Navbar from "./Navbar"

function App() {
  return (
      <div className="app">
        <Router>
          <div className="main">
            <Switch>
              <Route path="/Settings" component={Settings} /> 
              <Route path="/Analytics" component={Analytics} /> 
              <Route path={["/Dashboard", "/"]} component={Dashboard} />
            </Switch>
          </div>
          <Navbar /> 
        </Router>
      </div>
  )
}

export default App
