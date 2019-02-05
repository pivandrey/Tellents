import { handleActions } from 'redux-actions';
import * as TYPES from '../types';

const initialState = {
  talents: [],
  countTalents: '',
  talentsBuffer: [],
  isFetching: false,
};

 const jobsTalentsReducer = handleActions(
  {
    [TYPES.GET_TALENTS]: (state, action) => ({
      ...state,
      talents: action.payload.users,
      countTalents: action.payload.meta.total_count,
      talentsBuffer: action.payload.users,
      isFetching: false,
    }),
    [TYPES.GET_MORE_TALENTS]: (state, action) => ({
      ...state,
      talents: state.talentsBuffer.concat(action.payload.users),
      isFetching: false,
    }),
    [TYPES.FETCH_TALENTS_REQUEST]: (state, action) => ({
      ...state,
      talents: [],
      isFetching: true,
    }),
  },
  initialState
);

export default jobsTalentsReducer;