import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';

import '../containers/auth.css'

class Register extends Component {

  onSubmit = (values) => {
    this.props.registrateUser(values)
    
  }

  render() {
    const { closeModal } = this.props
    return(
      <div className="register-block">
        <h2>Please Sign Up</h2>
        <p>Join over 2 million tallents already using Tellents. Start now for free!</p>
        <Form 
          onSubmit={this.onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <Field
                  name="firstName"
                  component="input"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div>
                <Field
                  name="lastName"
                  component="input"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <Field
                  name="email"
                  component="input"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div>
                <Field
                  name="password"
                  component="input"
                  type="password"
                  placeholder="Choose Password"
                />
              </div>
              <div>
                <button type="submit" className="register-btn-submit">
                  Start now
                </button>
              </div>
            </form>
          )}
        />
        <button onClick={closeModal} className="register-btn-close" >X</button>
      </div>
    )
  }
};

Register.propTypes = {
  closeModal: PropTypes.func.isRequired,
  registrateUser: PropTypes.func.isRequired,
}

export default Register;