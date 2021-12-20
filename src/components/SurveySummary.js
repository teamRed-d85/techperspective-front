import React, { Component } from 'react';
import ResultsButton from './ResultsButton';
import DeleteButton from './DeleteButton';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class SurveySummary extends Component {
    render() {
        return (
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col><ResultsButton /></Col>
                        <Col><DeleteButton /></Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item >
        )
    }
}
