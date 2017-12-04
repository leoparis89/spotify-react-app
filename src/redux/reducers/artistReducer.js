import {GET_ALBUMS_START, GET_ALBUMS_COMPLETE} from '../actions/artistActions';

const initialState = {
  albums: [],
  loading: false,
  wantedOffset: null,
  offset: null,
  total: null

};
      
export function artist(state = initialState, action) {
  switch (action.type) {
  case GET_ALBUMS_START:
  { debugger;
    return {...state, loading: true};
  }
  case GET_ALBUMS_COMPLETE:
  {

    return { loading: false, ...action.result, 
      albums: state.offset ? state.albums.concat(action.result.albums) : action.result.albums };
  }
  default:
    return state;
  }
}   