// import React, { Component } from 'react'
// import Button from 'react-bootstrap/Button';
// import { useAuth0 } from '@auth0/auth0-react';

// function LoginButton() {
//   const {
//       isAuthenticated, 
//       loginWithRedirect
//   } = useAuth0();
//   console.log("login button", isAuthenticated);
//   return !isAuthenticated && (<Button onClick = {loginWithRedirect}>Please Login</Button>);
// }

// export default LoginButton;

import { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

class LoginButton extends Component {

  render() {
    console.log("class component login", this.props.auth0.isAuthenticated)
    return (
      <Button variant="success" onClick={this.props.auth0.loginWithRedirect}>Log In</Button>
    )
  }
}

export default withAuth0(LoginButton);