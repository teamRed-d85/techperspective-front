import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Iframe from "react-iframe"; 

// Iframe docs here: https://www.npmjs.com/package/react-iframe
// import JotformEmbed from 'react-jotform-embed';
// 213535497610053 current
// 211237450605043 old survey ID

// Figure out why this does not link to the process.env 
// ${process.env.REACT_APP_JOTFORM_SURVEY_ID}

export default class SurveyIframe extends Component {
  componentDidMount(){
    console.log(this.props.id);
  }
  render() {
    return (
      <div>
        
      <Card>
        <Iframe
            url={`https://www.jotform.com/form/${this.props.id}`}
            width="100%"
            height="500px"
            id="survey"
          />
        </Card>
      </div>
    );
  }
}