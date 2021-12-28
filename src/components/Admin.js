import React, { Component } from 'react';
import AdminHeader from './AdminHeader';
import SurveySummaryList from './SurveySummaryList';
import AllResultsButton from './AllResultsButton';
import ActiveSurveyContainer from './ActiveSurveyContainer';
import ConfirmModal from './ConfirmModal';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';


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
    // useEffect = () => {

    // }

    useEffect() {

    }

    componentDidMount() {
        console.log(this.props.auth0.isAuthenticated);
        this.props.getActiveSurvey();
    }
    render() {
        console.log("we are looking at Admin.js", this.props.auth0.isAuthenticated);
        return (
            <>
                {this.props.auth0.isAuthenticated ?
                    <>
                        <ConfirmModal showModal={this.state.showModal} closeModal={this.closeModal} putActiveSurvey={this.props.putActiveSurvey} />
                        <AdminHeader />
                        <ActiveSurveyContainer activeSurvey={this.props.activeSurvey} createNewSurvey={this.props.createNewSurvey} openModal={this.openModal} getActiveSurvey={this.props.getActiveSurvey} />
                        {/* {this.props.activeSurvey === null && <NewSurveyButton createNewSurvey={this.props.createNewSurvey} />}
                        {this.props.activeSurvey && <ActiveSurvey activeSurvey={this.props.activeSurvey} openModal={this.openModal} getActiveSurvey={this.props.getActiveSurvey} />} */}
                        <SurveySummaryList getSavedSurvey={this.props.getSavedSurvey} graphResults={this.props.graphResults} surveyData={this.props.surveyData} deleteSavedSurvey={this.props.deleteSavedSurvey} />
                        <AllResultsButton />
                    </>
                    : <LoginButton />}
            </>
        )
    }
}

export default withAuth0(Admin);