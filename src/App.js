import React, { Component } from 'react';
import Header from './components/Header';
import Survey from './components/Survey';
import Admin from './components/Admin';
import Results from './components/Results';
// import AboutUs from './components/AboutUs';
//import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import axios from "axios"; 

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeSurvey: 'null',
      surveyData: [],
      surveyId: null,
      error: false,
      surveyToGraph: null
    }
  }
  graphResults = (obj) =>{
    this.setState({surveyToGraph: obj})
  }
  /* Grab survey data from server, which grabs from db */
  getSavedSurvey = async () => {
    let url = `${process.env.REACT_APP_SERVER_URL}/survey`
    console.log("getSavedSurvey url is: " + url);
    
    try {
      let result = await axios.get(url);
      console.log("The surveydata.data is before setting state is: " + this.state.surveyData)
      this.setState({ surveyData: result.data });
      this.setState({error: false})
      console.log("The surveydata.data is: " + JSON.stringify(this.state.surveyData));
    } catch (error) {
      console.error("Data receive error: " + error);
      this.setState({ error: true });
    }

  }

  /* Ping server to delete survey data from DB */
  deleteSavedSurvey = async (id) => {
  let url = `${process.env.REACT_APP_SERVER_URL}/survey`
  console.log("deleteSavedSurvey url is: " + url);
    try {
      await axios.delete(url);
      const updatedSurveys = this.state.surveyData.filter((survey)=> survey._id !== id);
      this.setState({ surveyData: updatedSurveys});

    } catch (error ) {
      console.error("Delete error: " + error);
      this.setState({ error: true });
    }
  }

  /* Ping server to create a new survey ID to enter into the survey Iframe*/
  createNewSurvey = async () => {
    console.log('new survey button works');
    // let url = `${process.env.REACT_APP_SERVER_URL}/jotform`
    // try {
    //   const newSurveyObj = await axios.post(url);
    //   this.setState({ activeSurvey: newSurveyObj.data });

    // } catch (error) {
    //   console.log(error, 'could not create new survey');
    // }




  }

  /* Ping Jotform to clone a survey for the next class */



  // getConfig = async () => {
  //   if (this.props.auth0.isAuthenticated) {
  //     const res = await this.props.auth0.getIdTokenClaims();
  //     const jwt = res.__raw;
  //     console.log(res);
  //     console.log(jwt);
  //     const config = {
  //       headers: { "Authorization": `Bearer ${jwt}`},
  //     }
  //     console.log(config);
  //     return config;
  //   }
  // }

  componentDidMount() {
    this.getSavedSurvey();
  }


  render() {
    return (
      <>
        <Router>
          <Header />
          {/* <Results surveyData={this.state.surveyData} getSavedSurvey= {this.getSavedSurvey} /> */}
          <Routes>
            <Route exact path="/" element={<Survey />} />
            <Route path="/admin" element={<Admin graphResults={this.graphResults} surveyData = {this.state.surveyData} />} />
            <Route surveyData = {this.state.surveyData}  path="/results" element={<Results getSavedSurvey= {this.getSavedSurvey} surveyData = {this.state.surveyData} />} />
          </Routes>
        </Router>
      </>
    )
  }
}

export default App;
