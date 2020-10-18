import React from "react"
import {auth} from "../../firebase"
import { Button, Grid, Switch, Card} from "@material-ui/core"

function Settings(props) {
    console.log(props.dark)

    return (
        <>
            <Grid item xs={12}>  
                <Card>
                    <Button color="primary" variant="contained" onClick={() => auth.signOut()}>Sign Out</Button>
                </Card>
            </Grid>
            <Grid item xs={12}> 
                <Card>
                    Dark Mode
                    <Switch checked={props.darkMode} onChange={() => props.setDarkMode(!props.darkMode)}/>
                </Card> 
            </Grid>
        </>
    )
}

export default Settings