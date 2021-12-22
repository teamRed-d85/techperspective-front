import React, { Component } from 'react';
import AdminHeader from './AdminHeader';
import SurveySummaryList from './SurveySummary';
import AllResultsButton from './AllResultsButton';


export default class Admin extends Component {
    
    render() {
        return (
            <>
                <AdminHeader />
                <SurveySummaryList />
                <AllResultsButton />
            </>
        )
    }
}
