import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import './style/style.css'

import Total from "./components/Total"
import MonthSelector from "./components/MonthSelector"
import Details from "./components/Details"

/* data = {
  {

  }
} */

function App() {
  return (
    <Router>
      <div className="app">
        <Link to="/">
          <h1 className="title">Project Nina</h1>
        </Link>

        <Switch>
          <Route path="/Income">
            <Details />
          </Route>
          <Route path="/Spending">
            <Details />
          </Route>
          <Route path="/">
            <MonthSelector />
            <div id="totals">
              <Link to="/Income">
                <Total title="Income" amount={500}/>
              </Link>
              <Link to="/Spending">
                <Total title="Spending" amount={1650}/>
              </Link>  
            </div>  
          </Route>
        </Switch>
      </div>
    </Router>
      
  )
}

export default App
