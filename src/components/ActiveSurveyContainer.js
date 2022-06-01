import { Component } from "react";
import ActiveSurvey from "./ActiveSurvey"

class ActiveSurveyContainer extends Component {
    componentDidMount() {
        this.props.getActiveSurvey();
    }
    render() {
        return (
            <>
                <br></br>

                <div style={{ justifyContent: "center" }} >

                    {this.props.activeSurvey.map((survey, idx) => {
                        return (

                            <ActiveSurvey graphResults={this.props.graphResults} key={idx} activeSurvey={survey} />

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