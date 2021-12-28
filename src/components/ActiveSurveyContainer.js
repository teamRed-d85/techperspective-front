import { Component } from "react";
import NewSurveyButton from "./NewSurveyButton";
import ActiveSurvey from "./ActiveSurvey";

class ActiveSurveyContainer extends Component {
    componentDidMount() {
        this.props.getActiveSurvey();
    }
    render() {
        return (
            <>
                {this.props.activeSurvey === null && <NewSurveyButton createNewSurvey={this.props.createNewSurvey} />}
                {this.props.activeSurvey && <ActiveSurvey graphResults={this.props.graphResults} activeSurvey={this.props.activeSurvey} openModal={this.openModal} getActiveSurvey={this.props.getActiveSurvey} />}
            </>
        )
    }
}

export default ActiveSurveyContainer;