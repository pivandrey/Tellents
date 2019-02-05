import { handleActions } from 'redux-actions';
import * as TYPES from '../types';

const initialState = {
  jobs: [],
  countJobs: '',
  jobsBuffer: [],
  isFetching: false,
};

 const jobsCardsReducer = handleActions(
  {
    [TYPES.GET_JOBS]: (state, action) => ({
      ...state,
      jobs: action.payload.jobs,
      countJobs: action.payload.meta.total_count,
      jobsBuffer: action.payload.jobs,
      isFetching: false,
    }),
    [TYPES.GET_MORE_JOBS]: (state, action) => ({
      ...state,
      jobs: state.jobsBuffer.concat(action.payload.jobs),
      isFetching: false,
    }),
    [TYPES.FETCH_JOBS_REQUEST]: (state, action) => ({
      ...state,
      jobs: [],
      isFetching: true,
    }),
  },
  initialState
);

export default jobsCardsReducer;