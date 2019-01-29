import { handleActions } from 'redux-actions';
import * as TYPES from '../types'
import * as axios  from 'axios';

const initialState = {
  languages: [],
}

const LanguagesReducer = handleActions(
  {
    [TYPES.GET_LANGUAGES]: (state, action) => {
      return {
        languages: action.payload,
      }
    }
  },
  initialState
)

export default LanguagesReducer