import {GET_ALBUMS_START, GET_ALBUMS_COMPLETE} from '../actions/artistActions';

const initialState = {
  artist: {},
  albums: [],
  loading: false,
  wantedOffset: null,
  offset: null,
  total: null

};
      
export function artist(state = initialState, action) {
  switch (action.type) {
  case GET_ALBUMS_START:
  { 
    const { wantedOffset } = action;
    return {...state, loading: true, wantedOffset};
  }
  case GET_ALBUMS_COMPLETE:
  {
    const { albums: savedAlbums, wantedOffset } = state;
    const { result } = action;
    const { result: {albums: incAlbums} } = action;
    return {...state, loading: false, ...result,
      albums: wantedOffset ?  [...savedAlbums,...incAlbums ] : [...incAlbums]
    };
  }
  default:
    return state;
  }
}   