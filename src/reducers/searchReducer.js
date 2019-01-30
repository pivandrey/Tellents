import { handleActions } from 'redux-actions';
import * as TYPES from '../types'

const initialState = {
  search: '',
}

const searchReducer = handleActions(
  {
    [TYPES.SET_SEARCH_REQUEST]: (state, action) => {
      return {
        search: action.payload,
      }
    }
  },
  initialState
)

export default searchReducer