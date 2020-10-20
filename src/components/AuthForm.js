import React, { useCallback, useContext, useState } from "react"
import { withRouter, Redirect } from "react-router"
import { auth } from "../firebase.js"
import { AuthContext } from "../Auth.js"
import { Link, useLocation } from "react-router-dom"
import { useTheme } from '@material-ui/core/styles'

import { FormControl, Form, Input, Button, Typography, Card, CardHeader, CardContent, Grid, TextField } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles({
    card: {
        textAlign: "center"
    },
    heading: {

    },
    input: {
        width: "100%",
        marginBottom: 10
    },
    button: {
        marginTop: 20,
        marginBottom: 25,
        width: "80%"
    },
    link: {
        textDecoration: "none"
    }
})

function AuthForm({ history }) {
    // Checks if signin or signup form should be loaded.
    const [location, setLocation] = useState(useLocation().pathname)
   
    const { currentUser } = useContext(AuthContext)
    const classes = useStyles()
  
    const handleSignIn = useCallback(
        async event => {
        event.preventDefault()
        const { email, password } = event.target.elements
        try {
            await auth.signInWithEmailAndPassword(email.value, password.value)
            history.push("/")
        } catch (error) {
            alert(error)
        }
        },
        [history]
    )

    const handleSignUp = useCallback(async event => {
        event.preventDefault()
        const { email, password } = event.target.elements
        try {
        await auth.createUserWithEmailAndPassword(email.value, password.value)

        history.push("/")
        } catch (error) {
        alert(error)
        }
    }, [history])
    console.info(location)
    if (currentUser) {
        return <Redirect to="/" />;
    }
    return (
        <Grid item xs={12} md={10} lg={8}>
            <form onSubmit={location==="/signin"? handleSignIn : handleSignUp}>   
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.heading} variant="h4" color="primary">Divitiae</Typography>
                        <br />
                        {
                            <>        
                                <TextField
                                    name="email"
                                    type="email"
                                    id="outlined-with-placeholder"
                                    label="Email"
                                    placeholder="Email"
                                    className={[classes.textField, classes.input]}
                                    margin="normal"
                                    variant="outlined"
                                />   
                                <TextField
                                    name="password"
                                    type="password"
                                    id="outlined-with-placeholder"
                                    label="Password"
                                    placeholder="Password"
                                    className={[classes.textField, classes.input]}
                                    margin="normal"
                                    variant="outlined"
                                />   
                                <Button className={classes.button} type="submit" variant="contained" color="primary">
                                    {location==="/signin"? "Sign In" : "Sign Up"}
                                </Button>
                                <br />

                                {location==="/signin"
                                ? 
                                    <Link className={classes.link} to="/signup" onClick={() => setLocation("/signup")}>
                                        Create Account
                                    </Link>
                                :
                                    <Link className={classes.link} to="/signin" onClick={() => setLocation("/signin")}>
                                        Already have an account?
                                    </Link>
                                }
                            </>
                        }
                    </CardContent>     
                </Card>   
            </form>
        </Grid>
    ) 
}

export default withRouter(AuthForm)
