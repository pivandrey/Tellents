import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Register from './Register';
import Login from './Login';

import { register, loginUser } from '../actions/authUserActions';
import { 
  showModalRegistration, 
  closeModalRegistration, 
  showModalLogin, 
  closeModalLogin 
} from '../actions/authModalActions';

import './auth.css'

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
  };

  registrateUser = (values) => {
    this.props.register(values);
  };

  loginUser = (values) => {
    this.props.loginUser(values);
  };

  render() {
    const { showLogin, showRegister } = this.props;
    return(
      <div className="authorization-block">
        {!showRegister && !showLogin && <div>
          <a href="/#" 
            onClick={this.handleShowModalRegistration} 
            className="auth-btn-show-block auth-register"
          >Register</a><br />
          <a href="/#" 
            onClick={this.handleShowModalLogin}
            className="auth-btn-show-block auth-login"
          >Login</a>
        </div>}
        {showRegister && 
        <Register 
          closeModal={this.handleCloseModalRegistration}
          registrateUser={this.registrateUser}
        />}
        {showLogin && 
        <Login 
          closeModal={this.handleCloseModalLogin}
          loginUser={this.loginUser}
        />}
      </div>
    )
  }
};

Auth.propTypes = {
  showLogin: PropTypes.bool.isRequired,
  showRegister: PropTypes.bool.isRequired,
};

const mapStateToProps = store => {
  return {
    showLogin: store.authModal.showModalLogin,
    showRegister: store.authModal.showModalRegistration,
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    showModalRegistration, 
    closeModalRegistration, 
    showModalLogin, 
    closeModalLogin,
    register,
    loginUser,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);