import * as TYPES from '../types';
import { http } from '../client'

export const fetchLanguages = () => async (dispatch, getState) => {
  try {
    const {data} = await http().get(`/misc/get_languages`);
    dispatch(fetchLanguagesSuccess(data.languages));
    
  } catch (error) {
    throw error;
  }
}

export function fetchLanguagesSuccess (values) {
  return {
    type: TYPES.GET_LANGUAGES,
    payload: values,
  }
}