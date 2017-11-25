import {
  SET_QUERY, SEARCH_ARTISTS_COMPLETE
} from './actions';
import { combineReducers } from 'redux';

const initialState = {
  results: [],
  query: null
};

function search(state = initialState  , action) {
  switch (action.type) {
  case SET_QUERY:
    return { query: action.query, results: [] };
  case SEARCH_ARTISTS_COMPLETE:
    return {...state, results: action.results};
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  search
});

export default rootReducer;