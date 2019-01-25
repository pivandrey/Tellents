import React, { Component } from 'react';
import { Form, Field } from 'react-final-form'

class Register extends Component {

  onSubmit = (values) => {
    this.props.registrateUser(values)
  }

  render() {
    const { closeModal } = this.props
    return(
      <div>
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
                <button type="submit">
                  Start now
                </button>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        />
        <button onClick={closeModal}>Close</button>
      </div>
    )
  }
  
};

export default Register;