import { combineReducers } from 'redux';
import authModalReducer from './authModalReducer';
import authUserReducer from './authUserReducer';
import jobsCardsReducer from './jobsCardsReducer';
import addJobReducer from './addJobReducer';
import talentsCardsReducer from './talentsCardsReducer';
import CountriesReducer from './CountriesReducer';
import LanguagesReducer from './languagesReducer';
import filterJobReducer from './filterJobReducer';
import searchReducer from './searchReducer';
import sortReducer from './sortReducer';
import pageReducer from './pageReducer';
import filterTalentsReducer from './filterTalentsReducer';
import termsReducer from './termsReducer';

export const rootReducer = combineReducers ({
  authModal: authModalReducer,
  authUser: authUserReducer,
  jobs: jobsCardsReducer,
  talents: talentsCardsReducer,
  addJobModal: addJobReducer,
  countries: CountriesReducer,
  languages: LanguagesReducer,
  filterJob: filterJobReducer,
  search: searchReducer,
  sort: sortReducer,
  page: pageReducer,
  filterTalents: filterTalentsReducer,
  terms: termsReducer,
});