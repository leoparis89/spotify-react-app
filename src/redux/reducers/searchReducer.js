import {
  SET_QUERY, SEARCH_ARTISTS_START, SEARCH_ARTISTS_COMPLETE
} from '../actions/searchActions';

const initialState = {
  artists: [],
  query: null,
  offset: null,
  loading: false,
  total: null
};
    
export function search(state = initialState, action) {
  switch (action.type) {
  case SET_QUERY:
    return {...initialState, query: action.query};
  case SEARCH_ARTISTS_START:
    return {...state, loading: true};
  case SEARCH_ARTISTS_COMPLETE:
    return {
      ...state,
      ...action.results,
      artists: [...state.artists, ...action.results.artists],
      loading: false,
    };
  default:
    return state;
  }
}
