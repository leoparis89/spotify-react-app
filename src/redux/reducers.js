import {
  SET_QUERY, SEARCH_ARTISTS_START, SEARCH_ARTISTS_COMPLETE
} from './actions';
import { combineReducers } from 'redux';

const initialState = {
  results: [],
  query: null,
  offset: 0,
  loading: false
};

export function search(state = initialState, action) {
  switch (action.type) {
  case SET_QUERY:
    return { query: action.query, offset: 0, results: [] };
  case SEARCH_ARTISTS_START:
    return { ...state, loading: true };
  case SEARCH_ARTISTS_COMPLETE:
    return {
      ...state,
      loading: false,
      offset: state.offset + 20,
      results: state.results.concat(action.results)
    };
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  search
});

export default rootReducer;