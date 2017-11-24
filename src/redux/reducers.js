import {
  SET_QUERY, SEARCH_ARTISTS_COMPLETE
} from './actions';
import { combineReducers } from 'redux';

function search(state = {}, action) {
  switch (action.type) {
    case SET_QUERY:
      return { query: action.query };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  search
});

export default rootReducer;