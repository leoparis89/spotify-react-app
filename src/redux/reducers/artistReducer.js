import {GET_ALBUMS_START, GET_ALBUMS_COMPLETE} from '../actions/artistActions';

const initialState = {
  albums: [],
  loading: false
};
      
export function artist(state = initialState, action) {
  switch (action.type) {
  case GET_ALBUMS_START:
  {
    return {...state, loading: true};
  }
  case GET_ALBUMS_COMPLETE:
  {
    return { loading: false, ...action.result, albums: state.albums.concat(action.result.albums)};
  }
  default:
    return state;
  }
}   