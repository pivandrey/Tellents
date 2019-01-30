import * as TYPES from '../types';
import { http } from '../client'
import history from '../history'

const queryString = require('query-string');

export const fetchJobs = () => async (dispatch, getState) => {
  try {
    const state =  getState();
    const filterState = state.filterJob;
    let urlHistory = '/dashboard/find/job'
    let urlAPI = `/jobs/search?`;
    let requestOption = {};
    if (filterState) {
      for (let key in filterState) {
        if (filterState[key]) {
          requestOption[key] = filterState[key];
        }
      }
      urlAPI += queryString.stringify({
        page: 1,
        q: JSON.stringify(
          requestOption,
        ),
      })
      if(queryString.stringify(requestOption)) {
        urlHistory += "?" + queryString.stringify(requestOption)
      }
    }
    history.push(urlHistory)
    const {data} = await http().get(urlAPI, filterState);
    dispatch(fetchJobsSuccess(data.jobs));
    
  } catch (error) {
    throw error;
  }
}

export function fetchJobsSuccess (values) {
  return {
    type: TYPES.GET_JOBS,
    payload: values,
  }
}