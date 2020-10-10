import React from "react"
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
    return (
        <div className="navbar grid">    
            <Link to="/Dashboard">
                <div class="nav-link">
                    <div className="text">Dashboard</div>
                    <FontAwesomeIcon icon={faHome} />  
                </div>
            </Link>
            <Link to="/Analytics">
                <div class="nav-link">
                    <div className="text">Analytics</div>
                    <FontAwesomeIcon icon={faChartLine} />
                </div>
            </Link>    
            <Link to="/Settings">
                <div class="nav-link">
                    <div className="text">Settings</div>
                    <FontAwesomeIcon icon={faCog} />  
                </div>    
            </Link>      
        </div>
    )
}

export default Navbar