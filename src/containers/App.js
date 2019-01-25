import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Auth from './Auth'
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Auth} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
