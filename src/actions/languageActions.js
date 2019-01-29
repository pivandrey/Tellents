import { createAction } from 'redux-actions';
import * as TYPES from '../types';
import * as axios  from 'axios';

export const fetchLanguages = () => async (dispatch, getState) => {
  try {
    const {data} = await axios.get(`https://floating-atoll-63112.herokuapp.com/api/v1/misc/get_languages`);
    dispatch(fetchLanguagesSuccess(data.languages));
    
  } catch( error) {
    throw error;
  }
}

export function fetchLanguagesSuccess (values) {
  return {
    type: TYPES.GET_LANGUAGES,
    payload: values,
  }
}