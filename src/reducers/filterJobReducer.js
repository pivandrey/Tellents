import { handleActions } from 'redux-actions';
import * as TYPES from '../types';

const initialState = {
  exp: '',
  post: '',
  loc: '',
  lang: '',
  avl: '',
  payment: '',
  p_from: '',
  p_to: '',
  bud: '',
  prop: '',
};

 const filterJobReducer = handleActions(
  {
    [TYPES.ADD_JOB_FILTER]: (state, action) => {
      let value = '';
      const newFilters = action.payload;
      for (let key in newFilters) {
        if (state[key]) {
          if (state[key].indexOf(newFilters[key] && state[key].length === newFilters[key].length) === 0) {
            value = state[key].replace(newFilters[key], "");
          } else if (state[key].indexOf(newFilters[key]) === 0) {
            value = state[key].replace(newFilters[key], "").substring(1);
          } else if (state[key].indexOf(newFilters[key]) > 0 && 
          state[key].lastIndexOf(newFilters[key]) === (state[key].length - newFilters[key].length)) {
            value = state[key].replace(newFilters[key], "").slice(0, -1)
          } else if (state[key].indexOf(newFilters[key]) > 0) {
            value = state[key].replace(newFilters[key], "").replace(",,", ",")
          } else if (key === "post" || key === "prop" || key === "bud") {
            value = newFilters[key]
          } else value = state[key] + ',' + newFilters[key]
        } else {
          value = newFilters[key]
        }
      
        return {
          ...state,
          [key]: value,
        }
      }
    },
    [TYPES.SET_FILTERS_FROM_HISTORY]: (state, action) => {
      return {
        ...initialState,
        ...action.payload,
      }
    },
    [TYPES.ADD_FILTER_FROM_FORM]: (state, action) => {
      return {
        ...initialState,
        ...action.payload,
      }
    }
  },
  initialState
 );

 export default filterJobReducer;