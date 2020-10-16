import React from "react"
import { Router, Switch, Route } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import Dashboard from "./components/Dashboard"
import Spending from "./components/spending/Spending"
import Settings from "./components/settings/Settings"
import history from './history';
import SignIn from "./components/SignIn"
import SignUp from "./components/SignIn"

function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <PrivateRoute path="/spending" component={Spending} />
                <PrivateRoute path="/settings" component={Settings} />
                <PrivateRoute path="*" component={Dashboard} /> 
{/*                 <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} /> */}
            </Switch>
        </Router>
    )
}

export default Routes