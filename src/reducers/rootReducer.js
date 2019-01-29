import { combineReducers } from 'redux'
import authModalReducer from './authModalReducer'
import authUserReducer from './authUserReducer'
import jobsCardsReducer from './jobsCardsReducer'
import addJobReducer from './addJobReducer'
import talentsCardsReducer from './talentsCardsReducer'
import CountriesReducer from './CountriesReducer'
import LanguagesReducer from './languagesReducer'

export const rootReducer = combineReducers ({
  authModal: authModalReducer,
  authUser: authUserReducer,
  jobs: jobsCardsReducer,
  talents: talentsCardsReducer,
  addJobModal: addJobReducer,
  countries: CountriesReducer,
  languages: LanguagesReducer,
})
