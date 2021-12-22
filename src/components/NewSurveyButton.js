import { Component } from 'react';
import Button from 'react-bootstrap/Button';

class NewSurveyButton extends Component {
    render() {
        return (
            <Button variant="secondary" onClick={this.props.createNewSurvey} >New Survey</Button>
        )
    }
}

export default NewSurveyButton;