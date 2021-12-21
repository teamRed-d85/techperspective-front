import React, { Component } from 'react';
import LogOutButton from './LogOutButton.js';
import AdminButton from './AdminButton.js';
import Navbar from 'react-bootstrap/Navbar';

export default class Header extends Component {

    render() {
        return (
            <>
            <Navbar>
                    {/* {this.props.auth0.isAuthenticated && <LogOutButton />}
            {this.props.auth0.isAuthenticated && <AdminButton />} */}
            </Navbar>
            </>
            
        )
    }
}
