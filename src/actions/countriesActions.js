import * as TYPES from '../types';
import { http } from '../client'

export const fetchCountries = () => async (dispatch, getState) => {
  try {
    const {data} = await http().get(`/misc/countries`);
    dispatch(fetchCountriesSuccess(data));
    
  } catch (error) {
    throw error;
  }
}

export function fetchCountriesSuccess (values) {
  return {
    type: TYPES.GET_COUNTRIES,
    payload: values,
  }
}