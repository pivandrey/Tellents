import { handleActions } from 'redux-actions';
import * as TYPES from '../types'

const initialState = {
  jobs: [],
  countJobs: '',
}

 const jobsCardsReducer = handleActions(
  {
    [TYPES.GET_JOBS]: (state, action) => ({
      ...state,
      jobs: action.payload.jobs,
      countJobs: action.payload.meta.total_count,
    }),
    [TYPES.GET_MORE_JOBS]: (state, action) => ({
      ...state,
      jobs: state.jobs.concat(action.payload.jobs),
    })
  },
  initialState
)

export default jobsCardsReducer