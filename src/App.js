import React, { Component } from 'react';
import Header from './components/Header';
import Survey from './components/Survey';
import Admin from './components/Admin';
import Results from './components/Results'


class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Survey />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/results">
              <Results />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;
