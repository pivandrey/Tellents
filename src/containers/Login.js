import React, { Component } from 'react';
import { Form, Field } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

class Login extends Component {

  render() {
    const { closeModal } = this.props
    return(
      <div>
        <h2>Login Into Your Account</h2>
        <a href="#/">Sign in with Facebook</a>
        <a href="#/">Sign in with Google</a>
        <p>or</p>
        <Form 
          onSubmit={onSubmit}
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

export default Login;