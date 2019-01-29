import { createAction } from 'redux-actions';
import * as TYPES from '../types';
import * as axios  from 'axios';

export const fetchJobs = () => async (dispatch, getState) => {
  try {
    const {data} = await axios.get(`https://floating-atoll-63112.herokuapp.com/api/v1/jobs/search?page=1&q=%7B%7D`);
    dispatch(fetchJobsSuccess(data.jobs));
    
  } catch( error) {
    throw error;
  }
}

export function fetchJobsSuccess (values) {
  return {
    type: TYPES.GET_JOBS,
    payload: values,
  }
}