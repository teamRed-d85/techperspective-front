import { Component } from 'react';
import ResultsHeader from './ResultsHeader';
import ResultsGraph from './ResultsGraph';

class Results extends Component {

    render() {
        return (
            <>  
                <ResultsHeader />
                <ResultsGraph />
            </>
        )
    }
}

export default Results;