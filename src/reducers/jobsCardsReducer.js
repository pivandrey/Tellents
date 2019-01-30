import { handleActions } from 'redux-actions';
import * as TYPES from '../types'

const initialState = {
  jobs: [],
  curentJob: '',
}

 const jobsCardsReducer = handleActions(
  {
    [TYPES.GET_ID_JOB]: (state, action) => ({
      ...state
    }),
    [TYPES.GET_JOBS]: (state, action) => ({
      ...state,
      jobs: action.payload,
    }),
    [TYPES.GET_MORE_JOBS]: (state, action) => ({
      ...state,
      jobs: state.jobs.concat(action.payload),
    })
  },
  initialState
)

export default jobsCardsReducer