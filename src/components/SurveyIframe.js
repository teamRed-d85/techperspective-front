import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Iframe from "react-iframe"; // Iframe docs here: https://www.npmjs.com/package/react-iframe

export default class SurveyIframe extends Component {
  render() {
    return (
      <div>
        <Card>
          <h2>Please complete the embedded survey below.</h2>

          <h2>Be sure to hit "SUBMIT" after answering the last question.</h2>

          <Iframe
            url={`https://form.jotform.com/${REACT_APP_JOTFORM_API}`}
            width="100%"
            height="500px"
            id="survey"
          />
        </Card>
      </div>
    );
  }