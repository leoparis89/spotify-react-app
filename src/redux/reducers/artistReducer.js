import {GET_ALBUMS_START} from '../actions/artistActions';

const initialState = {
  id: null,
  albums: []
};
      
export function artist(state = initialState, action) {
  switch (action.type) {
  case GET_ALBUMS_START:
  {
    return state;
  }
  default:
    return state;
  }
}   