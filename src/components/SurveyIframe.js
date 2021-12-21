import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Iframe from "react-iframe"; // Iframe docs here: https://www.npmjs.com/package/react-iframe
// import JotformEmbed from 'react-jotform-embed';

export default class SurveyIframe extends Component {
  render() {
    return (
      <div>
        
      <Card>
          <Iframe
            url={`http://www.jotform.com/form/211237450605043`}
            width="100%"
            height="500px"
            id="survey"
          />
        </Card>
      </div>
    );
  }
}