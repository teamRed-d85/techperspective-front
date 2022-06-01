import { Component } from "react";
import NewSurveyButton from "./NewSurveyButton";
import ActiveSurvey from "./ActiveSurvey"
import {Row } from 'react-bootstrap'

class ActiveSurveyContainer extends Component {
    componentDidMount() {
        this.props.getActiveSurvey();
    }
    render() {
        return (
            <>
            <br></br>
            <div style={{ justifyContent:"center" }} >
            
                <NewSurveyButton createNewSurvey={this.props.createNewSurvey} />

                {this.props.activeSurvey.map(survey => {
                    return (

                          <ActiveSurvey activeSurvey={survey}/>

                    )
                })}

                {/*{this.props.activeSurvey && <ActiveSurvey graphResults={this.props.graphResults} activeSurvey={this.props.activeSurvey} openModal={this.props.openModal} getActiveSurvey={this.props.getActiveSurvey} />}*/}
            </div>
            <br></br>
            </>
        )
    }
}

export default ActiveSurveyContainer;