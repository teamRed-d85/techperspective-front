import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export default class AdminButton extends Component {
    render() {
        return (
            <div>
                <Button onClick={() => login()}>Log In</Button>
            </div>
        )
    }
}
