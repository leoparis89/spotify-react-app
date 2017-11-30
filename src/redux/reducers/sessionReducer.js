import {
  LOGIN_START, LOGIN_COMPLETE, LOGIN_FAILED
} from '../actions/sessionActions';
  
const initialState = {
  isLoggedIn: false
};
      
export function session(state = initialState, action) {
  switch (action.type) {
  case LOGIN_START:
    return { state};
  case LOGIN_FAILED:
    return { state};
  case LOGIN_COMPLETE:
    return {
      ...state,
      isLoggedIn: true
    };
  default:
    return state;
  }
}
