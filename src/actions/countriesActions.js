import { createAction } from 'redux-actions';
import * as TYPES from '../types';
import * as axios  from 'axios';

export const fetchCountries = () => async (dispatch, getState) => {
  try {
    const {data} = await axios.get(`https://floating-atoll-63112.herokuapp.com/api/v1/misc/countries`);
    dispatch(fetchCountriesSuccess(data));
    
  } catch( error) {
    throw error;
  }
}

export function fetchCountriesSuccess (values) {
  return {
    type: TYPES.GET_COUNTRIES,
    payload: values,
  }
}