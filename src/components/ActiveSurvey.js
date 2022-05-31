import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import ResultsButton from './ResultsButton';


class ActiveSurvey extends Component {
    render() {
        return (
            <Card>
                <Card.Header as="h5">Active Survey</Card.Header> 
                {/*change h5 name to Survey Name (ex. 301-d85*/}
                <Card.Body>

                    {/* change refresh to "share link" button*/}

                    <Row md={6} style={{ justifyContent: 'space-around', alignItems: 'center' }}>
                        <Button style={{ maxHeight: 36 }} variant="primary" onClick={this.props.getActiveSurvey}>Share</Button>
                        <Card.Title>{this.props.activeSurvey.createdOn}</Card.Title>
                        <Card.Text>
                            Survey ID: {this.props.activeSurvey.surveyID}
                        </Card.Text>
                        <Card.Text>
                            Submission Count: {this.props.activeSurvey.submissionCount}
                        </Card.Text>

                        <ResultsButton surveyData = {this.props.activeSurvey.results} graphResults = {this.props.graphResults}/>
                        <Button style={{ maxHeight: 36, paddingLeft: 0, paddingRight: 0 }}variant="outline-dark" onClick={this.props.openModal}>Archive Survey</Button>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}

export default ActiveSurvey;