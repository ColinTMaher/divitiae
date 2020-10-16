import React, {useContext} from "react"
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faThList } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
import {AuthContext} from "../Auth"
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
    const {currentUser} = useContext(AuthContext)

    if(currentUser) {
        return (
            <div className="header">  
                <div className="w2">
                    <select>
                        <option>-Sort By-</option>
                        <option>Date</option>
                        <option>Amount</option>
                        <option>Category</option>
                    </select>
                </div>
                <div className="w4">
                    <input type="text" placeholder="search"></input>
                </div>
            </div>          
        ) 
    } 
    return null
}

export default Header