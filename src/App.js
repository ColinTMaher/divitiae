import React from 'react'
//import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Header from "./components/Header"
import Main from "./components/Main"
import Aside from "./components/Aside"
import Footer from "./components/Footer"

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
    <div className="grid-container">
      <div className="menu-icon">
        <strong> &#9776;</strong>
      </div>
      <Header />
      <Main />
      <Aside />
      <Footer />
    </div>
  )
}

export default App
