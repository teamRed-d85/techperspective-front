import { Component } from 'react';
import ResultsHeader from './ResultsHeader';
import ResultsGraph from './ResultsGraph';
// console.log("In results we see surveyData as: " + this.props.surveyData);

class Results extends Component {
    
    render() {
        return (
            <>  
                <ResultsHeader />
                <ResultsGraph surveyToGraph={this.props.surveyToGraph} />
            </>
        )
    }
}

export default Results;