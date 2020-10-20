import React from "react"
import { auth } from "../../firebase"
import { Grid, Switch, Card, Link, CardActionArea, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/Styles"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';




const useStyles = makeStyles({
    settingsCard: {
        textAlign: "center",
        padding: 0
    },
    actionArea: {
        height: 60,
        display: "flex",
        justifyContent: "space-around"
    }
})

function Settings(props) {
    const classes = useStyles()

    return (
        <>
            <Grid item xs={6}> 
                <Card className={classes.settingsCard}>
                    <CardActionArea className={classes.actionArea} onClick={() => props.setDarkMode(!props.darkMode)}>
                        <Typography>
                            Dark Mode
                        </Typography>
                        <Switch checked={props.darkMode} />
                    </CardActionArea>
                </Card> 
            </Grid>
            <Grid item xs={6}>  
                <Card className={classes.settingsCard}>
                    <CardActionArea className={classes.actionArea} onClick={() => auth.signOut()}>
                        <Typography>
                            Sign Out
                        </Typography>
                        <ExitToAppIcon />
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    )
}

export default Settings