import { createAction } from 'redux-actions';
import * as TYPES from '../types';
import { http } from '../client';
import history from '../history';

const queryString = require('query-string');

export const fetchTalents = () => async (dispatch, getState) => {
  try {
    dispatch(fetchTalentsRequest());
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
      dispatch(fetchTalentsMoreSuccess(data));
    } else {
      dispatch(fetchTalentsSuccess(data));
    }
    
  } catch (error) {
    throw error;
  }
};

export const fetchTalentsRequest = createAction(TYPES.FETCH_TALENTS_REQUEST);
export const fetchTalentsSuccess = createAction(TYPES.GET_TALENTS);
export const fetchTalentsMoreSuccess = createAction(TYPES.GET_MORE_TALENTS);