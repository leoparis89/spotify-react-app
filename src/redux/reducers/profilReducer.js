import {GET_PROFILE_COMPLETE} from '../actions/profileActions';

const initialState = {
  info: null
};
      
export function profile(state = initialState, action) {
  switch (action.type) {
  case GET_PROFILE_COMPLETE:
  {
    return action.profile;
  }
  default:
    return state;
  }
}   
