import { createAction } from 'redux-actions';
import * as TYPES from '../types'

export const showModalRegistration = createAction(TYPES.SHOW_MODAL_REGISTRATION);
export const closeModalRegistration = createAction(TYPES.CLOSE_MODAL_REGISTRATION);
export const showModalLogin = createAction(TYPES.SHOW_MODAL_LOGIN);
export const closeModalLogin = createAction(TYPES.CLOSE_MODAL_LOGIN);