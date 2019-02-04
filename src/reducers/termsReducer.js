import { handleActions } from 'redux-actions';
import * as TYPES from '../types';

const initialState = {
  showTerms: false,
};

 const termsReducer = handleActions(
  {
    [TYPES.SHOW_TERMS]: (state, action) => ({
      ...state,
      showTerms: true,
    }),
    [TYPES.CLOSE_TERMS]: (state, action) => ({
      ...state, 
      showTerms: false,
    }),
  },
  initialState
);

export default termsReducer;