import { handleActions } from 'redux-actions';
import * as TYPES from '../types';

const initialState = {
  firstName: 'John',
  lastName: 'Jackson',
  email: '',
  user: '',
};

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
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
      }
    },
    [TYPES.GET_DATA_ABOUT_USER]: (state, action) => {
      return {
        ...state,
        firstName: action.payload.first_name,
        lastName: action.payload.last_name,
        email: action.payload.email,
        user: action.payload,
      }
    }
  },
  initialState
);

export default authUserReducer;
