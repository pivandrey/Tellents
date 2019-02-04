import { createAction } from 'redux-actions';
import * as TYPES from '../types';

export const showTerms = createAction(TYPES.SHOW_TERMS);
export const closeTerms = createAction(TYPES.CLOSE_TERMS);