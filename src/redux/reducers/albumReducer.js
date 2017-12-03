import {GET_ALBUM_START, GET_ALBUM_COMPLETE, GET_ALBUM_FAILED} from '../actions/albumActions';

const initialState = {
  tracks: [],
  loading: false
};
      
export function album(state = initialState, action) {
  switch (action.type) {
  case GET_ALBUM_START:
  {
    return {...state, loading: true};
  }  case GET_ALBUM_COMPLETE:
  {
    return {...action.albumData, loading: false};
  }
  default:
    return state;
  }
}   