import { createAction } from 'redux-actions';
import { http } from '../client'

import * as TYPES from '../types'

//export const showModalAddJob = createAction(TYPES.SHOW_MODAL_ADD_JOB);
export const closeModalAddJob = createAction(TYPES.CLOSE_MODAL_ADD_JOB);

export const showModalAddJob = () => async (dispatch, getState) => {
  try {
    const {data} = await http().get('/profile/default_promotions');
    
    dispatch(showModalAddJobSuccess(data))
  } catch (error) {
    throw error;
  }
}

export function showModalAddJobSuccess(values) {
  console.log(values)
  return {
    type: TYPES.SHOW_MODAL_ADD_JOB,
    payload: values,
  }
}