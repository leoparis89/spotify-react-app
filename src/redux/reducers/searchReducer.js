import {
  SET_QUERY, SEARCH_ARTISTS_START, SEARCH_ARTISTS_COMPLETE
} from '../actions';

const initialState = {
  results: [],
  query: null,
  offset: null,
  wantedOffset: null,
  loading: false
};
    
export function search(state = initialState, action) {
  switch (action.type) {
  case SET_QUERY:
    return { ...initialState, query: action.query };
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
