import { Component } from 'react';
import ResultsHeader from './ResultsHeader';
import ResultsGraph from './ResultsGraph';
import Button from 'react-bootstrap/Button';

// console.log("In results we see surveyData as: " + this.props.surveyData);

class Results extends Component {


    
    render() {
        return (
            <>  
                <ResultsHeader />
                <ResultsGraph surveyData={this.props.surveyData[0]}/>
                <Button onClick={this.props.getSavedSurvey}>Get Saved Survey</Button>
            </>
        )
    }
}

export default Results;