import { createAction } from 'redux-actions';
import { http } from '../client';

import * as TYPES from '../types';

export const closeModalAddJob = createAction(TYPES.CLOSE_MODAL_ADD_JOB);
export const validateAgree = createAction(TYPES.VALIDATE_AGREE);

export const showModalAddJob = () => async (dispatch, getState) => {
  try {
    const {data} = await http().get('/profile/default_promotions');
    
    dispatch(showModalAddJobSuccess(data));
  } catch (error) {
    throw error;
  }
};

export function showModalAddJobSuccess(values) {
  return {
    type: TYPES.SHOW_MODAL_ADD_JOB,
    payload: values,
  }
};

export const postedJob = (values) => async (dispatch, getState) => {
  try {
    const {data} = await http().post('/client_jobs', values);

    dispatch(postedJobSuccess(data));
    dispatch(closeModalAddJob());
  } catch (e) {
    throw e
  }
}

export function postedJobSuccess(value) {
  return {
    type: TYPES.POSTED_JOB_SUCCESS,
    payload: value,
  }
}