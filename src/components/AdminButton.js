import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

class AdminButton extends Component {
    render() {
        return (
            <div>
                <Button onClick={() => login()}>Log In</Button>
            </div>
        )
    }
}

export default AdminButton;

