import {GET_ALBUM_START, GET_ALBUM_COMPLETE, GET_ALBUM_FAILED} from '../actions/albumActions';

const initialState = {
  id: null,
  tracks: [],
  loading: false
};
      
export function album(state = initialState, action) {
  switch (action.type) {
  case GET_ALBUM_START:
  {
    return {...state, loading: true};
  }
  default:
    return state;
  }
}   