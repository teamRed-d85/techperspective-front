import React, { Component } from 'react';
import AdminHeader from './AdminHeader';
import SurveySummaryList from './SurveySummary';
import AllResultsButton from './AllResultsButton';
import NewSurveyButton from './NewSurveyButton';


export default class Admin extends Component {
    
    render() {
        return (
            <>
                <AdminHeader />
                <NewSurveyButton createNewSurvey={this.props.createNewSurvey} />
                <SurveySummaryList />
                <AllResultsButton />
            </>
        )
    }
}
