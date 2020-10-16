import React, { useCallback, useContext } from "react"
import { withRouter, Redirect } from "react-router"
import { auth } from "../firebase.js"
import { AuthContext } from "../Auth.js"
import { Link } from "react-router-dom"
import { useTheme } from '@material-ui/core/styles'

import { FormControl, Form, Input, Button, Typography, Card, CardHeader, CardContent} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles({
  card: {
    alignItems: 'center'
  }
})

function SignIn({ history }) {
  const theme = useTheme()
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
    <Card className={classes.card} backround="red">
      <form onSubmit={handleSignIn}>   
        <CardContent>
          <Typography variant="h2" color="primary">Sign In</Typography>
          <Input name="email" type="email" placeholder="Email" />
          <Input name="password" type="password" placeholder="Password" />
          <Button type="submit" variant="contained" color="primary">
            Sign In
          </Button>
{/*           <Button>
            <Link to="/signup">
            Create Account 
            </Link>
          </Button> */}
        </CardContent>
      </form>
    </Card>   
  )
}

export default withRouter(SignIn)
