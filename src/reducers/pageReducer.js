import { handleActions } from 'redux-actions';
import * as TYPES from '../types';

const initialState = {
  page: 1,
};

const pageReducer = handleActions(
  {
    [TYPES.SET_PAGE]: (state, action) => {
      return {
        page: state.page + 1,
      }
    },
    [TYPES.CLEAR_COUNT_PAGE]: (state, action) => {
      return {
        page: 1,
      }
    }
  },
  initialState
);

export default pageReducer;