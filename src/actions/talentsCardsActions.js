import { createAction } from 'redux-actions';
import * as TYPES from '../types';
import * as axios  from 'axios';

export const fetchTalents = () => async (dispatch, getState) => {
  try {
    const {data} = await axios.get(`https://floating-atoll-63112.herokuapp.com/api/v1/tellents/search?q=%7B%7D`);
    dispatch(fetchTalentsSuccess(data.users));
    
  } catch( error) {
    throw error;
  }
}

export function fetchTalentsSuccess (values) {
  return {
    type: TYPES.GET_TALENTS,
    payload: values,
  }
}