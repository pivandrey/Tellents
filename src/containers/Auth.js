import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'

import Register from './Register';
import Login from './Login';

import { addNewUser, loginUser } from '../actions/authUserActions';
import { 
  showModalRegistration, 
  closeModalRegistration, 
  showModalLogin, 
  closeModalLogin 
} from '../actions/authModalActions';

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

  registrateUser = (values) => {
    this.props.addNewUser(values);
  }

  loginUser = (values) => {
    this.props.loginUser(values);
  }

  render() {
    const { showLogin, showRegister } = this.props
    return(
      <div>
        <Link to='/dashboard/find/job'>go to dashboard</Link>
        {!showRegister && !showLogin && <div>
          <a href="/#" onClick={this.handleShowModalRegistration}>Register</a><br />
          <a href="/#" onClick={this.handleShowModalLogin}>Login</a>
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
    addNewUser,
    loginUser,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);