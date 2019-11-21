import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import AppNavbar from './components/layout/AppNavbar';
import DashBoard from './components/layout/DashBoard';

class App extends Component{
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={DashBoard} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
