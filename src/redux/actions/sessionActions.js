import {oAuthLogin} from '../../services/authentication/oAuthLogin';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_COMPLETE = 'LOGIN_COMPLETE';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export function login() {
  return dispatch => {
    dispatch(loginStart());
    oAuthLogin()
      .then(()=> {
        dispatch(loginComplete());
      })
      .catch(()=> {
        dispatch(loginFailed());
      })
    ;
  };
}

export function loginStart() {
  return { type: LOGIN_START };
}

export function loginComplete() {
  return { type: LOGIN_COMPLETE };
}

export function loginFailed() {
  return { type: LOGIN_FAILED };
}
