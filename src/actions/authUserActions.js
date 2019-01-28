import { createAction } from 'redux-actions';
import * as TYPES from '../types'
import * as axios  from 'axios';

export const addNewUser = createAction(TYPES.ADD_NEW_USER);
export function loginUser (values) {
  const user = {
    email: values.email,
    password: values.password,
  };
  
  return dispatch => {
    axios
    .post(`https://floating-atoll-63112.herokuapp.com/api/auth/sign_in`, user)
    .then(res => {
      console.log(res)
      const token = res.headers['access-token'];
      const firstName = res.data.data.first_name;
      const lastName = res.data.data.last_name;
      const email = res.data.data.email;
      const password = values.password;
      const userData = {token, firstName, lastName, email, password};
      dispatch({
        type: TYPES.LOGIN_USER,
        payload: userData,
      })
    })
  }
}

export const authUser = createAction(TYPES.AUTH_USER);