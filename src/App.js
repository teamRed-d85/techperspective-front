import React, { Component } from 'react';
import Header from './components/Header';
import Survey from './components/Survey';
import Admin from './components/Admin';
import Results from './components/Results'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Survey />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </Router>
      </>
    )
  }
}

export default App;
