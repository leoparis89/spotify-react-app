import {
  LOGIN_START, LOGIN_COMPLETE, LOGIN_FAILED
} from '../actions/sessionActions';
import {isLoggedIn} from '../../services/authentication/authentication';
  
const initialState = {
  isLoggedIn: isLoggedIn()
};
      
export function session(state = initialState, action) {
  switch (action.type) {
  case LOGIN_START:
    return { state};
  case LOGIN_FAILED:
    return { state};
  case LOGIN_COMPLETE:
    return {
      ...state.session,
      isLoggedIn: true
    };
  default:
    return state;
  }
}
