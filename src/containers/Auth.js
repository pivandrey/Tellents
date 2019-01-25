import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Register from './Register';
import Login from './Login';

import { 
  showModalRegistration, 
  closeModalRegistration, 
  showModalLogin, 
  closeModalLogin 
} from '../actions/authActions';

class Auth extends Component {

  handleShowModalRegistration = () => {
    this.props.showModalRegistration();
  };

  handleShowModalLogin = () => {
    this.props.showModalLogin();
  };

  handleCloseModalRegistration = () => {
    this.props.closeModalRegistration();
  };

  handleCloseModalLogin = () => {
    this.props.closeModalLogin();
  }

  render() {
    const { showLogin, showRegister } = this.props
    return(
      <div>
        {!showRegister && !showLogin && <div>
          <a href="#" onClick={this.handleShowModalRegistration}>Register</a><br />
          <a href="#" onClick={this.handleShowModalLogin}>Login</a>
        </div>}
        {showRegister && <Register closeModal={this.handleCloseModalRegistration}/>}
        {showLogin && <Login closeModal={this.handleCloseModalLogin} />}
      </div>
    )
  }
};

const mapStateToProps = store => {
  return {
    showLogin: store.auth.showModalLogin,
    showRegister: store.auth.showModalRegistration,
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    showModalRegistration, 
    closeModalRegistration, 
    showModalLogin, 
    closeModalLogin,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);