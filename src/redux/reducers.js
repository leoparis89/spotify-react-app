import {
  SET_QUERY, SEARCH_ARTISTS_COMPLETE
} from './actions';
import { combineReducers } from 'redux';

const initialState = {
  results: [],
  query: null,
  offset: 0
};

function search(state = initialState  , action) {
  switch (action.type) {
  case SET_QUERY:
    return { query: action.query, offset: 0, results: [] };
  case SEARCH_ARTISTS_COMPLETE:
    return {...state, offset: state.offset + 20, results: state.results.concat(action.results)};
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  search
});

export default rootReducer;