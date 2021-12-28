import { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Container from 'react-bootstrap/Container'
import LoginButton from './LoginButton';
import LogOutButton from "./LogOutButton";
import landing from '../css/landing.module.css';

class Landing extends Component {
  render() {
    return (
      <Container className={landing.pageCont}>
        {this.props.auth0.isAuthenticated ? <h1>{this.props.auth0.user.name}, Welcome to the Codefellows Tech Perspective Survey</h1> : <h1>Please log in to begin your survey.</h1>}
        {/* <img src="/imgs/logopic.jpg" alt="Codefellows Tech Perspective Survey" /> */}
        <LoginButton />
        <LogOutButton />
      </Container>
    )
  }
}


export default withAuth0(Landing);