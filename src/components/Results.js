import { Component } from 'react';
import ResultsHeader from './ResultsHeader';

import Button from 'react-bootstrap/Button';
import ResultsButton from './ResultsButton'
import ResultsGraph from './ResultsGraph';
// console.log("In results we see surveyData as: " + this.props.surveyData);

class Results extends Component {
    
    render() {
        return (
            <>  
                <ResultsHeader />
                <ResultsButton surveyData={this.props.surveyData}/>
                <ResultsGraph surveyToGraph= {this.props.surveyToGraph}/>
                <Button onClick={this.props.getSavedSurvey}>Get Saved Survey</Button>
            </>
        )
    }
}

export default Results;