import { handleActions } from 'redux-actions';
import * as TYPES from '../types'

const initialState = {
  talents: [],
  countTalents: '',
}

 const jobsTalentsReducer = handleActions(
  {
    [TYPES.GET_TALENTS]: (state, action) => ({
      ...state,
      talents: action.payload.users,
      countTalents: action.payload.meta.total_count,
    }),
    [TYPES.GET_MORE_TALENTS]: (state, action) => ({
      ...state,
      talents: state.talents.concat(action.payload.users),
    })
  },
  initialState
)

export default jobsTalentsReducer