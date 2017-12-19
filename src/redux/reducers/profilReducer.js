import {GET_PROFILE_COMPLETE, GET_SAVED_ALBUMS_COMPLETE} from '../actions/profileActions';
import {REMOVE_ALBUM_COMPLETE, SAVE_ALBUM_COMPLETE} from '../actions/artistActions';

const initialState = {
  savedAlbums: {},
  recentlyAddedAlbums: 0
};
      
export function profile(state = initialState, action) {
  switch (action.type) {
  case GET_PROFILE_COMPLETE:
  {
    return {...state, ...action.profile};
  }
  case GET_SAVED_ALBUMS_COMPLETE:
  {
    const {savedAlbums} = action;
    return {...state, savedAlbums};
  }
  case SAVE_ALBUM_COMPLETE:
  {
    let {recentlyAddedAlbums} = state;
    recentlyAddedAlbums ++;
    return {...state, recentlyAddedAlbums};
  }
  case REMOVE_ALBUM_COMPLETE:
  {
    let {recentlyAddedAlbums} = state;
    recentlyAddedAlbums && recentlyAddedAlbums --;
    return {...state, recentlyAddedAlbums};
  }
  default:
    return state;
  }
}   
