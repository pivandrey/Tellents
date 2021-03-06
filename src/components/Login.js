import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';

import '../containers/auth.css';

class Login extends Component {

  onSubmit = (values) => {
    this.props.loginUser(values);
  };

  render() {
    const { closeModal } = this.props;
    return(
      <div className="login-block">
        <h2>Login Into Your Account</h2>
        <a href="#/" className="login-btn-facebook">Sign in with Facebook</a>
        <a href="#/" className="login-btn-google">Sign in with Google</a>
        <p>or</p>
        <Form 
          onSubmit={this.onSubmit}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.firstName = "Required email";
            }
            if (!values.password) {
              errors.lastName = "Required password";
            }
            return errors;
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <Field
                  name="email"
                  component="input"
                  type="text"
                  placeholder="Email Adress"
                />
              </div>
              <div>
                <Field
                  name="password"
                  component="input"
                  type="password"
                  placeholder="Password (8 or more characters)"
                />
              </div>
              <div>
                <button type="submit" className="login-btn-submit">
                  Start now
                </button>
              </div>
            </form>
          )}
        />
        <button onClick={closeModal} className="login-btn-close">X</button>
      </div>
    )
  };
};

Login.propTypes = {
  closeModal: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
};

export default Login;