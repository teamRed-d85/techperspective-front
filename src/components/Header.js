import { Component } from 'react';
import { Link } from 'react-router-dom';
// import LoginButton from './LoginButton';
// import LogoutButton from './LogoutButton';
// import { withAuth0 } from '@auth0/auth0-react'
// import AdminButton from './AdminButton.js';
// import Navbar from 'react-bootstrap/Navbar';

export default class Header extends Component {

    handleLoginClick = () => {
        console.log('Yay! You logged in');
    }

    handleLogOutClick = () => {
        console.log('See ya! You logged out');
    }


    render() {
        return (
            <>
                <Link to="/Survey">Survey</Link>
                <Link to="/Admin">Admin</Link>

            </>
        )
    }
}

