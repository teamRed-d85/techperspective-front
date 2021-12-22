import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class ActiveSurvey extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Header>{this.props.activeSurvey.createdOn}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>{this.props.activeSurvey.surveyID}</ListGroup.Item>
                    <ListGroup.Item>{this.props.activeSurvey.submissionCount}</ListGroup.Item>

                </ListGroup>
            </Card>
        )
    }
}

export default ActiveSurvey;