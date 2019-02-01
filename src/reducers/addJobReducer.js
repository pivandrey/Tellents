import { handleActions } from 'redux-actions';
import * as TYPES from '../types';

const initialState = {
  showModalAddJob: false,
  categories: [],
  promotions: [],
  jobPostedSuccess: '',
};

const addJobReducer = handleActions(
  {
    [TYPES.CLOSE_MODAL_ADD_JOB]: (state, action) => ({
      ...state,
      showModalAddJob: false,
    }),
    [TYPES.SHOW_MODAL_ADD_JOB]: (state, action) => ({
      ...state,
      showModalAddJob: true,
      categories: action.payload.categories,
      promotions: action.payload.promotions,
    }),
    [TYPES.POSTED_JOB_SUCCESS]: (state, action) => ({
      ...state,
      jobPostedSuccess: action.payload.meta.messages[0],
    })
  },
  initialState
);

export default addJobReducer;