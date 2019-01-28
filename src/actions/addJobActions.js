import { createAction } from 'redux-actions';
import * as TYPES from '../types'

export const showModalAddJob = createAction(TYPES.SHOW_MODAL_ADD_JOB);
export const closeModalAddJob = createAction(TYPES.CLOSE_MODAL_ADD_JOB);
