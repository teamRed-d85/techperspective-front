import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import ResultsButton from './ResultsButton';


class ActiveSurvey extends Component {
    render() {
        return (
            <Card style={{ margin: 'auto', marginTop: 12, maxWidth: '70%'}}>
                <Card.Header as="h5">Active Survey</Card.Header>

                <Card.Body>

                    {/* Fix function for share*/}

                    <Row md={6} style={{ justifyContent: 'space-around', alignItems: 'center' }}>
                        <Button style={{ maxHeight: 36 }} variant="primary" onClick={this.props.getActiveSurvey}>Share</Button>
                        <Card.Title>{this.props.activeSurvey.createdOn}</Card.Title>
                        <Card.Text>
                            Survey ID: {this.props.activeSurvey.surveyID}
                        </Card.Text>
                        <Card.Text>
                            Submission Count: {this.props.activeSurvey.submissionCount}
                        </Card.Text>

                        <ResultsButton surveyID = {this.props.activeSurvey.surveyID} graphResults = {this.props.graphResults}/>
                        <Button style={{ maxHeight: 36, paddingLeft: 0, paddingRight: 0 }} variant="outline-dark" onClick={this.props.openModal}>Archive Survey</Button>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}

export default ActiveSurvey;