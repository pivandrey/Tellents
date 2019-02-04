import { createAction } from 'redux-actions';
import * as TYPES from '../types';
import history from '../history';

import Auth from 'j-toker';

Auth.configure({
  apiUrl: 'https://floating-atoll-63112.herokuapp.com/api',
  validateOnPageLoad: true,
  handleTokenValidationResponse: (resp) => {
    return resp.data;
  },
});

export const register = (values) => async (dispatch, getState) => {
  try {
    const {data} = await Auth.emailSignUp({
      email: values.email,
      password: values.password,
      password_confirmation: values.password,
      config_name: "default",
      first_name: values.firstName,
      last_name: values.lastName,
    });

    dispatch(setDataAboutUser(data));
    history.push('/dashboard/find/job')

  } catch (e) {
    alert('Invalid credentials.')
    throw e
  }
};

export const loginUser = (values) => async (dispatch, getState) => {
  try {
    const {data} = await Auth.emailSignIn({
      email: values.email,
      password: values.password,
    });

    dispatch(setDataAboutUser(data));
    history.push('/dashboard/find/job')

  } catch (e) {
    alert('Invalid credentials.')
    throw e
  }
};

export const setDataAboutUser = createAction(TYPES.SET_DATA_ABOUT_USER);

export const authUser = createAction(TYPES.AUTH_USER);