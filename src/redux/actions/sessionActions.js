import {oAuthLogin} from '../../services/authentication/oAuthLogin';
import { logout as logoutFunc } from '../../services/authentication/authentication';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_COMPLETE = 'LOGIN_COMPLETE';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';
export const START_LOGOUT_TIMER = 'START_LOGOUT_TIMER';
export const START_KEEP_ALIVE = 'START_KEEP_ALIVE';
export const STOP_KEEP_ALIVE = 'STOP_KEEP_ALIVE';
import { getProfile } from './profileActions';
import {getCurrentEpochInSec} from '../../services/utils/date';

export function login(opt) {
  return dispatch => {
    dispatch(loginStart());
    oAuthLogin(opt)
      .then(()=> {
        dispatch(loginComplete());
        
        dispatch(startLogoutTimer());
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

export function startLogoutTimer() {
  const currentDate = getCurrentEpochInSec();
  const expDate = +localStorage.getItem('login-date') + 3600;
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, (expDate - currentDate) * 1000);

    dispatch({ type: START_LOGOUT_TIMER });
  };
}

let interValId;
export function startKeepAlive() {
  return dispatch => {
    const minute = 60 * 1000;
    // renew token in hidden iframe every 50 minutes
    interValId = setInterval(() => dispatch(login({covert: true})), 5000);
    dispatch({ type: START_KEEP_ALIVE });
  };
}

export function stopKeepAlive() {
  return dispatch => {
    clearInterval(interValId);
    dispatch({ type: STOP_KEEP_ALIVE });
  };
}
