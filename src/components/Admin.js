import React, { Component } from 'react';
import AdminHeader from './AdminHeader';
import SurveySummaryList from './SurveySummaryList';
import AllResultsButton from './AllResultsButton';
import NewSurveyButton from './NewSurveyButton';
import ActiveSurvey from './ActiveSurvey';
import ConfirmModal from './ConfirmModal';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        }
    }

    closeModal = () => {
        this.setState({ showModal: false })
    }

    openModal = () => {
        this.setState({ showModal: true })
    }

    render() {
        return (
            <>
                <ConfirmModal showModal={this.state.showModal} closeModal={this.closeModal} putActiveSurvey={this.props.putActiveSurvey} />
                <AdminHeader />
                {this.props.activeSurvey === null && <NewSurveyButton createNewSurvey={this.props.createNewSurvey} />}
                {this.props.activeSurvey && <ActiveSurvey activeSurvey={this.props.activeSurvey} openModal={this.openModal} />}
                <SurveySummaryList graphResults = {this.props.graphResults} surveyData={this.props.surveyData} />
                <AllResultsButton />
            </>
        )
    }
}

export default Admin;