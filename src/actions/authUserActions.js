import { createAction } from 'redux-actions';
import * as TYPES from '../types';

import Auth from 'j-toker';

Auth.configure({
  apiUrl: 'https://floating-atoll-63112.herokuapp.com/api',
});

export function addNewUser (values) {
  return dispatch => {
    Auth.emailSignUp({
      email: values.email,
      password: values.password,
      password_confirmation: values.password,
      config_name: "default",
      first_name: values.firstName,
      last_name: values.lastName,
    })
  }
}

export function loginUser (values) {
  return dispatch => {
    Auth.emailSignIn({
      email: values.email,
      password: values.password,
    })
  }
}

export const authUser = createAction(TYPES.AUTH_USER);