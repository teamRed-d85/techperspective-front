import { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react'
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import LoginButton from './LoginButton'

import { Navbar, Container, Nav } from 'react-bootstrap'
import LogoutButton from "./LogOutButton";

class Header extends Component {

  render() {
    return (
      <>
          <Navbar style={{ padding: 0 }} id="headerBackground" expand="lg">
              <Container style={{ paddingLeft: 0}} fluid>
                  <Image
                      id="headerImage"
                      src="cf-logo-horizontal-2-color-white.png"
                  />
                      <Nav
                          className="me-auto my-2 my-lg-0"
                          style={{ maxHeight: '100px' }}
                          navbarScroll
                      >
                      </Nav>
                  {this.props.auth0.isAuthenticated ?
                      <>
                          <Link className="headerButtonSurvey" to="/">
                              <Button style={{height: '3rem', width: '9rem', backgroundColor: "#ea4444", marginLeft: "1rem"}} variant="primary">Show Survey</Button>
                          </Link>
                          <Link className="headerButtonSurvey" to="/admin">
                              <Button style={{height: '3rem', width: '9rem', marginLeft: "1rem"}} variant="light">Admin Panel</Button>
                          </Link>
                          <Link className="headerButtonSurvey" to="/">
                              <LogoutButton/>
                          </Link>
                      </>
                      : <LoginButton/>
                  }
              </Container>
          </Navbar>
      </>
    );
  }
}

export default withAuth0(Header);