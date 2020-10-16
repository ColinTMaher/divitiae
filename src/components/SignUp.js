import React, { useCallback } from "react";
import { withRouter } from "react-router";
import {auth} from "../firebase";
import {Link} from "react-router-dom"

function SignUp({ history }) {
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

  return (
    <div className="auth">
      <h1 className="title">Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
        <div className="link">
          <Link to="/signin">
              Already have an account?  
          </Link>
        </div>
      </form>
    </div>
  )
}

export default withRouter(SignUp);
