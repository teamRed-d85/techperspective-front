import { Component } from "react";
import { Link } from "react-router-dom";
// import LoginButton from './LoginButton';
// import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react'
// import AdminButton from './AdminButton.js';
// import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

class Header extends Component {
  handleLoginClick = () => {
    console.log("Yay! You logged in");
  };

  handleLogOutClick = () => {
    console.log("See ya! You logged out");
  };

  render() {
    return (
      <>
        <Card border="dark">
          <Image
            id="headerImage"
            src="cf-logo-horizontal-2-color-white.png"
          />
          {this.props.auth0.isAuthenticated ? 



          <Card.Body>
            <div class="container">
              <Link class="headerButtonSurvey" to="/Survey">
                <Button variant="primary">Show Survey</Button>
              </Link>
              
              <Link type="button" class="headerButtonAdmin" to="/Admin">
                <Button variant="warning">Admin Panel</Button>
              </Link>
              
              <br></br>
            </div>
          </Card.Body> : <></>}
        </Card>

      </>
    );
  }
}

export default withAuth0(Header);