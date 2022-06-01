import React, { Component } from 'react';
import SurveySummaryList from './SurveySummaryList';
import ActiveSurveyContainer from './ActiveSurveyContainer';
import ConfirmModal from './ConfirmModal';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import Row from 'react-bootstrap/Row';
import NewSurveyButton from './NewSurveyButton';


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

    componentDidMount() {
        this.props.getActiveSurvey();
    }
    render() {
        return (
            <div>
            <ConfirmModal showModal={this.state.showModal} closeModal={this.closeModal} putActiveSurvey={this.props.putActiveSurvey} />

                {this.props.auth0.isAuthenticated ?
                    <>
                        <NewSurveyButton createNewSurvey={this.props.createNewSurvey} />
                        {/* add update API Button*/}
                        {/* add Active survey header and counter how many surveys */}
                        <ActiveSurveyContainer activeSurvey={this.props.activeSurvey} createNewSurvey={this.props.createNewSurvey} graphResults={this.props.graphResults} openModal={this.openModal} getActiveSurvey={this.props.getActiveSurvey} />
                        {/* add archived survey header */}
                        <SurveySummaryList getSavedSurvey={this.props.getSavedSurvey} graphResults={this.props.graphResults} surveyData={this.props.surveyData} deleteSavedSurvey={this.props.deleteSavedSurvey} />
                    </>
                    : 
                    <Row style={{justifyContent: "center"}}>
                    <LoginButton />
                    </Row>}
            </div>
        )
    }
}


export default withAuth0(Admin);