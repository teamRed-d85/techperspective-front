import React, { Component } from 'react';
import AdminHeader from './AdminHeader';
import SurveySummaryList from './SurveySummaryList';
import AllResultsButton from './AllResultsButton';
import NewSurveyButton from './NewSurveyButton';
import ActiveSurvey from './ActiveSurvey';


export default class Admin extends Component {
    
    render() {
        return (
            <>
                <AdminHeader />
                <NewSurveyButton createNewSurvey={this.props.createNewSurvey} />
                {this.props.activeSurvey && <ActiveSurvey activeSurvey={this.props.activeSurvey} />}
                <SurveySummaryList />
                <AllResultsButton />
            </>
        )
    }
}
