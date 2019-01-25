import { combineReducers } from 'redux'
import authModalReducer from './authModalReducer'
import authUserReducer from './authUserReducer'
import jobsCardsReducer from './jobsCardsReducer'

export const rootReducer = combineReducers ({
  authModal: authModalReducer,
  authUser: authUserReducer,
  jobs: jobsCardsReducer,
})
