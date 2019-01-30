import * as TYPES from '../types';
import { http } from '../client'

export const fetchTalents = () => async (dispatch, getState) => {
  try {
    const {data} = await http().get(`/tellents/search?q=%7B%7D`);
    dispatch(fetchTalentsSuccess(data.users));
    
  } catch (error) {
    throw error;
  }
}

export function fetchTalentsSuccess (values) {
  return {
    type: TYPES.GET_TALENTS,
    payload: values,
  }
}