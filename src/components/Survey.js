import React, { Component } from 'react';
import SurveyHeader from './SurveyHeader';
import SurveyIframe from './SurveyIframe';

export default class Survey extends Component {
    render() {
        return (
            <div>
                <SurveyHeader />
                <SurveyIframe />
            </div>
        )
    }
}
