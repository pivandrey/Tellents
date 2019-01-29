import { handleActions } from 'redux-actions';
import * as TYPES from '../types'
import * as axios  from 'axios';

const initialState = {
  firstName: 'John',
  lastName: 'Jackson',
  email: '',
  token: '',
  password: '',
}

const authUserReducer = handleActions(
  {
    [TYPES.ADD_NEW_USER]: (state, action) => {
      return { 
        ...state,
      };
    },
    [TYPES.LOGIN_USER]: (state, action) => {
      return {
        ...state,
        token: action.payload.token,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        password: action.payload.password,
      }
    },/* 
    [TYPES.AUTH_USER]: (state, action) => {
      const token = state.token;
      const email = state.email;
      const password = state.password;
      const user = {token, email, password}
      axios
        .post(`https://floating-atoll-63112.herokuapp.com/api/v1/pusher/auth`, user)
        .then(res => {
          console.log(res);
        }) 
      return {
        ...state,
      }
    }, */
  },
  initialState
)
export default authUserReducer
