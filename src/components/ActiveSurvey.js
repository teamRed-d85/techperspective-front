import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import ResultsButton from './ResultsButton';
// import { Link } from "react-router-dom";

class ActiveSurvey extends Component {
    render() {
        return (
            <Card>
                <Card.Header as="h5">Active Survey</Card.Header>
                <Card.Body>
                    <Row md={6} style={{ justifyContent: 'space-around' }}>

                        <Button variant="primary" onClick={this.props.getActiveSurvey} style={{ width: '11rem' }}>Refresh</Button>
                        <Card.Title>{this.props.activeSurvey.createdOn}</Card.Title>
                        <Card.Text>
                            Survey ID: {this.props.activeSurvey.surveyID}
                        </Card.Text>
                        <Card.Text>
                            Submission Count: {this.props.activeSurvey.submissionCount}
                        </Card.Text>
                        {/* <Link>
                        <Button variant="secondary" style={{ width: '11rem' }} onClick={this.props.graphResults}>Results</Button>
                        </Link> */}
                        <ResultsButton surveyData = {this.props.activeSurvey.results} graphResults = {this.props.graphResults}/>
                        <Button variant="success" style={{ width: '11rem' }} onClick={this.props.openModal}>Survey Complete</Button>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}

export default ActiveSurvey;