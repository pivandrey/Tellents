import { handleActions } from 'redux-actions';
import * as TYPES from '../types';

const initialState = {
  showModalAddJob: false,
  categories: [],
  promotions: [],
  jobPostedSuccess: '',
  validateAgree: false,
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
    }),
    [TYPES.VALIDATE_AGREE]: (state, action) => ({
      ...state,
      validateAgree: action.payload,
    }),
    [TYPES.SHOW_MODAL_ADD_JOB_WITHOUT_DATA]: (state, action) => ({
      ...state,
      showModalAddJob: true,
    }),
  },
  initialState
);

export default addJobReducer;