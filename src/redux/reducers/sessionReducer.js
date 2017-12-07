import {
  LOGIN_START, LOGIN_COMPLETE, LOGIN_FAILED, LOGOUT
} from '../actions/sessionActions';
import {isLoggedIn} from '../../services/authentication/authentication';
  
const initialState = {
  isLoggedIn: isLoggedIn()
};
      
export function session(state = initialState, action) {
  switch (action.type) {
  case LOGIN_START:
    return  state;
  case LOGIN_FAILED:
    return  {
      ...state,
      isLoggedIn: false
    };
  case LOGIN_COMPLETE:
    return {
      ...state,
      isLoggedIn: true
    };
  case LOGOUT:
    return { ...state, isLoggedIn: false };
  default:
    return state;
  }
}
