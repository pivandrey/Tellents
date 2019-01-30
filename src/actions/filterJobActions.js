import { createAction } from 'redux-actions';
import * as TYPES from '../types'

export const addFilter = createAction(TYPES.ADD_FILTER);
export const setFilter = createAction(TYPES.SET_FILTERS_FROM_HISTORY);