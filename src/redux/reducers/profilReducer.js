import {GET_PROFILE_COMPLETE, GET_SAVED_ALBUMS_COMPLETE} from '../actions/profileActions';

const initialState = {
};
      
export function profile(state = initialState, action) {
  switch (action.type) {
  case GET_PROFILE_COMPLETE:
  {
    return action.profile;
  }
  case GET_SAVED_ALBUMS_COMPLETE:
  {
    const {savedAlbums} = action;
    return {...state, savedAlbums};
  }
  default:
    return state;
  }
}   
