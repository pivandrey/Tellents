import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Auth from "j-toker";

import Authorization from "../containers/Authorization";
import Dashboard from "../containers/Dashboard";
import { setDataAboutUser } from "../actions/authUserActions";

class App extends Component {
  async componentDidMount() {
    const user = await Auth.validateToken();
    this.props.setDataAboutUser(user);
  }

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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setDataAboutUser
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(App);
