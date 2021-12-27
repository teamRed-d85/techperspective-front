import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

class ActiveSurvey extends Component {
    render() {
        return (
            <Card>
                <Card.Header as="h5">Active Survey</Card.Header>
                <Card.Body>
                    <Row md={5} style={{ justifyContent: 'space-around' }}>

                        <Card.Title>{this.props.activeSurvey.createdOn}</Card.Title>
                        <Card.Text>
                            Survey ID: {this.props.activeSurvey.surveyID}
                        </Card.Text>
                        <Card.Text>
                            Submission Count: {this.props.activeSurvey.submissionCount}
                        </Card.Text>
                        <Button variant="secondary" style={{ width: '11rem' }}>Results</Button>
                        <Button variant="success" style={{ width: '11rem' }} onClick={this.props.openModal}>Survey Complete</Button>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}

export default ActiveSurvey;