import { useState, useEffect } from "react"
import { Grid, Paper, TextField, Button, Typography, Link } from '@material-ui/core'
import { useAuth } from 'contexts/AuthContext'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    mainGrid: {
        padding: "5px 20px 20px 20px",
        marginTop: "25px"
    }
})

function Signin() {
    const classes = useStyles()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showSignIn, setShowSignIn] = useState(true)
    const { signIn, signUp } = useAuth()
    const location = useLocation().pathname
    const history = useHistory()

    useEffect(() => {
        if(location === "/signin") setShowSignIn(true)
        else if(location === "/signup") setShowSignIn(false)
    }, [location])
    
    // Style.
    let xsWidth = 12
    let smWidth = 10

    async function handleSignIn(e) {
        e.preventDefault()
        await signIn(email, password)
            .catch(error => {
                alert(error.message)
            })

        history.push("/dashboard")
    }

    async function handleSignUp(e) {
        e.preventDefault()
        await signUp(email, password)
        .then(() => {
            handleSignIn(e)
        })
        .catch(error => {
            alert(error.message)
        })
    }

    return (
        <form onSubmit={showSignIn ? handleSignIn : handleSignUp}>
            <Grid className={classes.mainGrid} container spacing={3} justify="center" component={Paper}>
                <Grid item xs={xsWidth} sm={smWidth}>
                    <Typography variant="h2" align="center">Divitiae</Typography>
                </Grid>
                <Grid item xs={xsWidth} sm={smWidth}> 
                    <TextField 
                        value={email}
                        type="email"
                        onChange={event => setEmail(event.target.value)}
                        fullWidth
                        label="Email"
                        variant="outlined" 
                    />
                </Grid>
                <Grid item xs={xsWidth} sm={smWidth}>
                    <TextField 
                        value={password}
                        type="password"
                        onChange={event => setPassword(event.target.value)}
                        fullWidth 
                        label={"Password"}
                        variant="outlined" 
                    />
                </Grid>
                <Grid item xs={xsWidth} sm={smWidth}>
                    <Button 
                        color="primary" 
                        fullWidth 
                        type="submit" 
                        variant="contained"
                        size="large"
                    >
                        {showSignIn 
                            ? "Sign In"
                            : "Sign Up"
                        }
                    </Button>
                </Grid>  
                <Grid item xs={xsWidth} sm={smWidth}>
                    <Typography align="center">
                        {showSignIn 
                            ? <Link component={RouterLink} to="/signup">Create Account</Link> 
                            : <Link component={RouterLink} to="/signin">Already have an account?</Link>
                        }
                    </Typography>
                </Grid>
            </Grid>   
        </form>  
   )
}

export default Signin