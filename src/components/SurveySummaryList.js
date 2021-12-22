import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import ResultsButton from "./ResultsButton";
import DeleteButton from "./DeleteButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class SurveySummaryList extends Component {
  render() {
    return (
      <>
        <Accordion>
          {this.props.surveyData.map((info) => {
            return (
              <Accordion.Item eventKey="0">
                <Accordion.Header>{info.CreatedOn}</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>Results: {info.Results}</Col>
                    <Col>Submission Count: {info.SubmissionCount}</Col>
                    <Col>Survey ID: {info.SurveyID}</Col>
                    <Col>
                      <ResultsButton />
                    </Col>
                    <Col>
                      <DeleteButton />
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </>
    );
  }
}
