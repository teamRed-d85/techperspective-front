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
      surveyData: [],
      surveyId: null,
      error: false
    }
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

   /* Ping server to create a new survey */
  // createNewSurvey = async () => {
  // let url = `${process.env.REACT_APP_SERVER_URL}/survey`
  // try {
  //   await axios.post(url);
  //   const newSurvey =
  // }




  // }

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
            <Route path="/admin" element={<Admin />} />
            <Route surveyData = {this.state.surveyData}  path="/results" element={<Results getSavedSurvey= {this.getSavedSurvey} surveyData = {this.state.surveyData} />} />
          </Routes>
        </Router>
      </>
    )
  }
}

export default App;
