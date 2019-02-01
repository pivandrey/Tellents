import { createAction } from 'redux-actions';
import * as TYPES from '../types';
import history from '../history';

import Auth from 'j-toker';

Auth.configure({
  apiUrl: 'https://floating-atoll-63112.herokuapp.com/api',
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

    dispatch(getDataAboutUser(data));
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

    dispatch(getDataAboutUser(data));
    history.push('/dashboard/find/job')

  } catch (e) {
    alert('Invalid credentials.')
    throw e
  }
};

export function getDataAboutUser (values) {
  return {
    type: TYPES.GET_DATA_ABOUT_USER,
    payload: values,
  }
};

export const authUser = createAction(TYPES.AUTH_USER);