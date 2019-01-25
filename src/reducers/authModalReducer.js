import { handleActions } from 'redux-actions';
import * as TYPES from '../types'

const initialState = {
  showModalRegistration: false,
  showModalLogin: false,
}

 const authModalReducer = handleActions(
  {
    [TYPES.SHOW_MODAL_REGISTRATION]: (state, action) => ({
      ...state,
      showModalRegistration: true,
    }),
    [TYPES.CLOSE_MODAL_REGISTRATION]: (state, action) => ({
      ...state, 
      showModalRegistration: false,
    }),
    [TYPES.SHOW_MODAL_LOGIN]: (state, action) => ({
      ...state, 
      showModalLogin: true,
    }),
    [TYPES.CLOSE_MODAL_LOGIN]: (state, action) => ({
      ...state, showModalLogin: false
    })
  },
  initialState
)

export default authModalReducer