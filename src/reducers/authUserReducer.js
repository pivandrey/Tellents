import { handleActions } from 'redux-actions';
import * as TYPES from '../types'

const initialState = {
  firstName: 'John',
  lastName: 'Jackson',
  email: '',
}

const authUserReducer = handleActions(
  {
    [TYPES.ADD_NEW_USER]: (state, action) => {
      const firstName = action.payload.firstName;
      const lastName = action.payload.lastName;
      const email = action.payload.email;
      return { 
        firstName: firstName, 
        lastName: lastName, 
        email: email, 
      };
    },
  },
  initialState
)
export default authUserReducer
