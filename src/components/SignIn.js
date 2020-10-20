import React, { useCallback, useContext } from "react"
import { withRouter, Redirect } from "react-router"
import { auth } from "../firebase.js"
import { AuthContext } from "../Auth.js"
import { Link } from "react-router-dom"
import { useTheme } from '@material-ui/core/styles'

import { FormControl, Form, Input, Button, Typography, Card, CardHeader, CardContent, Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles({
  card: {
    textAlign: "center"
  },
  input: {
    width: "90%",
    margin: "10px 0px"
  },
  button: {

  }
})

function SignIn({ history }) {
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

  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Grid item xs={10}>
      <form onSubmit={handleSignIn}>   
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h3" color="primary">Sign In</Typography>
            <br />
            <Input className={classes.input} name="email" type="email" placeholder="Email" />
            <br />
            <Input className={classes.input} name="password" type="password" placeholder="Password" />
            <br />
            <Button className={classes.input} type="submit" variant="contained" color="primary">
              Sign In
            </Button>
            <br />
            <Button>
              <Link to="/signup">
              Create Account 
              </Link>
            </Button>
          </CardContent>     
        </Card>   
      </form>
    </Grid>
  )
}

export default withRouter(SignIn)
