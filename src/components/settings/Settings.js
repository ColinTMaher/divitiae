import { Grid, Typography, Paper, Button, Switch, FormGroup, FormControlLabel, Divider, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useAuth } from 'contexts/AuthContext'
import FlareOutlinedIcon from '@material-ui/icons/FlareOutlined'
import FlareIcon from '@material-ui/icons/Flare'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

const useStyles = makeStyles({
    list: {
        padding: 0
    },
    listItem: {
        padding: "20px",
    },
    listItemText: {
        marginLeft: "25px"
    }
})

function Settings(props) {
    const classes = useStyles() 
    const { signOut } = useAuth()

    function handleSignOut() {
        signOut()
    }
    
    function toggleDarkMode() {
        props.setDarkMode(!props.darkMode)
    }
    
    return (
        <List className={classes.list} aria-label="mailbox folders" component={Paper}>
            <ListItem button className={classes.listItem} onClick={toggleDarkMode}>
                <ListItemAvatar>
                    <Avatar>
                        <FlareIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Dark Mode" className={classes.listItemText}/>
                <Switch checked={props.darkMode} />
            </ListItem>
            <Divider />
            <ListItem button className={classes.listItem} onClick={handleSignOut}>
                <ListItemAvatar>
                    <Avatar>
                        <ExitToAppIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Sign Out" className={classes.listItemText}/>
            </ListItem>
        </List>
    )
}

export default Settings