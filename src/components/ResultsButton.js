import React, { Component } from 'react';
import  Button  from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import ResultsGraph from './ResultsGraph';

export default class ResultsButton extends Component {

      // handleClick = () => {
      //   this.props.graphResults(this.props.surveyID);
      // }
    render() {
        return (
            
            <>
            <Link to="/Results">
            <Button onClick= {() =>  this.props.graphResults(this.props.surveyID)}
            variant="dark">Results</Button>
            </Link>
            
            </>
        )
    }
}
