import React, { Component } from 'react';
import SurveyIframe from './SurveyIframe';

export default class Survey extends Component {
    render() {
        return (
            <div>
                
                <h1>Please complete the embedded survey below.</h1>

                <h2>Be sure to hit "SUBMIT" after answering the last question.</h2>
                <br></br>

                <SurveyIframe activeSurvey={this.props.activeSurvey} />
            </div>
        )
    }
}
