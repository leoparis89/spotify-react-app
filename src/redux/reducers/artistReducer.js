import {GET_ALBUMS_START, GET_ALBUMS_COMPLETE} from '../actions/artistActions';

const initialState = {
  id: null,
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
    return {...state, loading: false, albums: action.result.items};
  }
  default:
    return state;
  }
}   