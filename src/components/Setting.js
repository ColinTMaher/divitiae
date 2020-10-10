import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

function Setting() {
    return (
        <div className="setting card">
            <div className="left-icon">
                <FontAwesomeIcon icon={faSignOutAlt} />  
            </div>
            <div className="text">
                <div className="main-text">
                    Sign Out
                </div>
                <div className="sub-text">
                    Click to sign out
                </div>
            </div>
            <div className="right-icon"> 
                <FontAwesomeIcon icon={faSquare} />  
            </div> 
        </div>
    )
}

export default Setting