import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Authorization from "../containers/Authorization";
import Dashboard from "../containers/Dashboard";

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Authorization} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App