import {
  SEARCH_ARTISTS, SEARCH_ARTISTS_COMPLETE
} from './actions';
import { combineReducers } from 'redux';

function search(state = [], action) {
  switch (action.type) {
  case SEARCH_ARTISTS_COMPLETE:
    return action.search;
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  search
});

export default rootReducer;