import { 
  SHOW_MODAL_REGISTRATION, 
  CLOSE_MODAL_REGISTRATION, 
  SHOW_MODAL_LOGIN, 
  CLOSE_MODAL_LOGIN 
} from '../actions/authActions'

const initialState = {
  showModalRegistration: false,
  showModalLogin: false,
}

export function authReducer(state = initialState, action) {
  switch(action.type) {
    case SHOW_MODAL_REGISTRATION:
      return {...state, showModalRegistration: true}

    case CLOSE_MODAL_REGISTRATION:
      return {...state, showModalRegistration: false}

    case SHOW_MODAL_LOGIN: 
      return {...state, showModalLogin: true}

    case CLOSE_MODAL_LOGIN:
      return {...state, showModalLogin: false}

    default: 
      return state
  }
}