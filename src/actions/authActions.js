export const SHOW_MODAL_REGISTRATION = 'SHOW_MODAL_REGISTRATION';
export const CLOSE_MODAL_REGISTRATION = 'CLOSE_MODAL_REGISTRATION';
export const SHOW_MODAL_LOGIN = 'SHOW_MODAL_LOGIN';
export const CLOSE_MODAL_LOGIN = 'CLOSE_MODAL_LOGIN';

export function showModalRegistration (value) {
  return {
    type: SHOW_MODAL_REGISTRATION,
    payload: value,
  }
}

export function closeModalRegistration (value) {
  return {
    type: CLOSE_MODAL_REGISTRATION,
    payload: value,
  }
}

export function showModalLogin (value) {
  return {
    type: SHOW_MODAL_LOGIN,
    payload: value,
  }
}

export function closeModalLogin (value) {
  return {
    type: CLOSE_MODAL_LOGIN,
    payload: value,
  }
}
