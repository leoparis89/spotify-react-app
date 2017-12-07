import {oAuthLogin} from '../../services/authentication/oAuthLogin';
import  { logout as logoutFunc } from '../../services/authentication/authentication';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_COMPLETE = 'LOGIN_COMPLETE';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';
export const START_KEEP_ALIVE = 'START_KEEP_ALIVE';
export const STOP_KEEP_ALIVE = 'STOP_KEEP_ALIVE';
import { getProfile } from './profileActions';

export function login() {
  return dispatch => {
    dispatch(loginStart());
    oAuthLogin()
      .then(()=> {
        dispatch(loginComplete());
        dispatch(getProfile());
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

export function logout() {
  logoutFunc();
  return { type: LOGOUT };
}

export function startKeepAlive() {
  return { type: START_KEEP_ALIVE };
}

export function stopKeepAlive() {
  return { type: STOP_KEEP_ALIVE };
}