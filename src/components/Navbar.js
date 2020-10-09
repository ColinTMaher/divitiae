import React from "react"
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar grid">    
            <Link to="/Dashboard">
                Dashboard
            </Link>
            <Link to="/Settings">
                Settings
            </Link>      
        </div>
    )
}

export default Navbar