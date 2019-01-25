import { combineReducers } from 'redux'
import authModalReducer from './authModalReducer'
import authUserReducer from './authUserReducer'

export const rootReducer = combineReducers ({
  authModal: authModalReducer,
  authUser: authUserReducer,
})
