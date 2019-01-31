import * as TYPES from '../types';
import { http } from '../client'
import history from '../history'

const queryString = require('query-string');

export const fetchTalents = () => async (dispatch, getState) => {
  try {
    const state =  getState();
    const filterState = state.filterTalents;
    const searchRequest = state.search.search;
    const sort = state.sort.sort;
    const pageForUrl = state.page.page;

    let urlHistory = '/dashboard/find/talent';
    let urlAPI = `/tellents/search?`;
    let requestOption = {};

    if (filterState) {
      for (let key in filterState) {
        if (filterState[key]) {
          requestOption[key] = filterState[key];
        }
      };

      if(searchRequest) requestOption['q'] = searchRequest;
      if(sort) requestOption['sort'] = sort;

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

    if(pageForUrl > 1) dispatch(fetchTalentsMoreSuccess(data));
    else dispatch(fetchTalentsSuccess(data));
    
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

export function fetchTalentsMoreSuccess (values) {
  return {
    type: TYPES.GET_MORE_TALENTS,
    payload: values,
  }
}