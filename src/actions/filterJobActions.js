import { createAction } from 'redux-actions';
import * as TYPES from '../types';

export const addFilter = createAction(TYPES.ADD_FILTER);
export const setFilterFromHistory = createAction(TYPES.SET_FILTERS_FROM_HISTORY);
export const addFilterFromForm = createAction(TYPES.ADD_FILTER_FROM_FORM);