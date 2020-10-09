import React from 'react'
//import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Main from "./components/Main"
import Navbar from "./components/Navbar"

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
    <div className="flex-grid">
      <Main />
      <Navbar />
    </div>
  )
}

export default App
