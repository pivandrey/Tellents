import { handleActions } from 'redux-actions';
import * as TYPES from '../types';

const initialState = {
  sort: '',
};

const sortReducer = handleActions(
  {
    [TYPES.SORT]: (state, action) => {
      return {
        sort: action.payload,
      }
    }
  },
  initialState
);

export default sortReducer;