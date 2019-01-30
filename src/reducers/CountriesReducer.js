import { handleActions } from 'redux-actions';
import * as TYPES from '../types'

const initialState = {
  countries: [],
}

const CountriesReducer = handleActions(
  {
    [TYPES.GET_COUNTRIES]: (state, action) => {
      return {
        countries: action.payload,
      }
    }
  },
  initialState
)

export default CountriesReducer