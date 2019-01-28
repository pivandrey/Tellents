import { handleActions } from 'redux-actions';
import * as TYPES from '../types'

import defaultTalents from '../default/deafultTalents'

const initialState = {
  talents: defaultTalents,
  curentTalent: '',
}

 const talentsCardsReducer = handleActions(
  {
    [TYPES.GET_ID_JOB]: (state, action) => ({
      ...state
    })
  },
  initialState
)

export default talentsCardsReducer