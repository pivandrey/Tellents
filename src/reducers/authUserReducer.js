import { handleActions } from 'redux-actions';
import * as TYPES from '../types'

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
    },
  },
  initialState
)
export default authUserReducer
