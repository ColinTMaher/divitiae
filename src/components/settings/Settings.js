import React from "react"
import {auth} from "../../firebase"
import { Button, Grid } from "@material-ui/core"

function Settings() {
    return (
        <Grid container>  
            <Grid item xs={12}>  
                <Button color="primary" variant="contained" onClick={() => auth.signOut()}>Sign Out</Button>
            </Grid>
        </Grid>
    )
}

export default Settings