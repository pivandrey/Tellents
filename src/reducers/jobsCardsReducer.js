import { handleActions } from 'redux-actions';
import * as TYPES from '../types'

import defaultJobs from '../default/defaultJobs'

const initialState = {
  jobs: defaultJobs,
  curentJob: '',
}

 const jobsCardsReducer = handleActions(
  {
    [TYPES.GET_ID_JOB]: (state, action) => ({
      ...state
    })
  },
  initialState
)

export default jobsCardsReducer