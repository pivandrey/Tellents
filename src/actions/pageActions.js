import { createAction } from 'redux-actions';
import * as TYPES from '../types';

export const setPage = createAction(TYPES.SET_PAGE);
export const clearCountPage = createAction(TYPES.CLEAR_COUNT_PAGE);