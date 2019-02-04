import * as TYPES from '../types';
import { http } from '../client';
import history from '../history';

const queryString = require('query-string');

export const fetchJobs = () => async (dispatch, getState) => {
  try {
    const state =  getState();
    const filterState = state.filterJob;
    const searchRequest = state.search.search;
    const sort = state.sort.sort;
    const pageForUrl = state.page.page;

    let urlHistory = '/dashboard/find/job';
    let urlAPI = `/jobs/search?`;
    let requestOption = {};

    if (filterState) {
      for (let key in filterState) {
        if (filterState[key]) {
          requestOption[key] = filterState[key];
        }
      };

      if(searchRequest) {
        requestOption['q'] = searchRequest;
      }
      if(sort) {
        requestOption['sort'] = sort;
      }

      urlAPI += queryString.stringify({
        page: pageForUrl,
        q: JSON.stringify(
          requestOption,
        ),
      });

      if(queryString.stringify(requestOption)) {
        urlHistory += "?" + queryString.stringify(requestOption)
      };
    };

    history.push(urlHistory);

    const {data} = await http().get(urlAPI, filterState);

    if(pageForUrl > 1) {
      dispatch(fetchJobsMoreSuccess(data));
    } else {
      dispatch(fetchJobsSuccess(data));
    }
    
  } catch (error) {
    throw error;
  }
};

export function fetchJobsSuccess (values) {
  return {
    type: TYPES.GET_JOBS,
    payload: values,
  }
};

export function fetchJobsMoreSuccess (values) {
  return {
    type: TYPES.GET_MORE_JOBS,
    payload: values,
  }
};