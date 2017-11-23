import {
  SEARCH_ARTISTS, SEARCH_ARTISTS_COMPLETE
} from './actions';
import { combineReducers } from 'redux';

function artists(state = [], action) {
  switch (action.type) {
  case SEARCH_ARTISTS_COMPLETE:
    return action.artists;
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  artists
});

export default rootReducer;