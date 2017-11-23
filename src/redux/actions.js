/*
 * action types
 */

export const SEARCH_ARTISTS = 'SEARCH_ARTISTS';
export const SEARCH_ARTISTS_COMPLETE = 'SEARCH_ARTISTS_COMPLETE';
export const SEARCH_ARTISTS_FAILED = 'SEARCH_ARTISTS_FAILED';
// export const TOGGLE_TODO = 'TOGGLE_TODO';
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * action creators
 */

export function searchArtists(query) {
  return { type: SEARCH_ARTISTS, query };
}

export function searchArtistsComplete(artists) {
  return { type: SEARCH_ARTISTS_COMPLETE, artists };
}

export function searchArtistsFailed(error) {
  return { type: SEARCH_ARTISTS_FAILED, error };
}
