import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class AllResultsButton extends Component {
    render() {
        return (
            
            <div>
               <Button onClick={this.props.handleClick} variant="primary">All The Results!</Button> 
            </div>
        )
    }
}
