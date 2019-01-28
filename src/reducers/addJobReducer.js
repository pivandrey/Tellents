import { handleActions } from 'redux-actions'
import * as TYPES from '../types'

const initialState = {
  showModalAddJob: false,
}

const addJobReducer = handleActions(
  {
    [TYPES.CLOSE_MODAL_ADD_JOB]: (state, action) => ({
      ...state,
      showModalAddJob: false,
    }),
    [TYPES.SHOW_MODAL_ADD_JOB]: (state, action) => ({
      ...state,
      showModalAddJob: true,
    }),
  },
  initialState
)

export default addJobReducer