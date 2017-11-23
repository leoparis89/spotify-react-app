/*
 * action types
 */

import { searchArtist } from '../services/spotify/spotify';

export const SEARCH_ARTISTS = 'SEARCH_ARTISTS';
export const SEARCH_ARTISTS_COMPLETE = 'SEARCH_ARTISTS_COMPLETE';
export const SEARCH_ARTISTS_FAILED = 'SEARCH_ARTISTS_FAILED';

export function searchArtists(query) {
  return dispatch => {
    searchArtist(query).then(artists => {
      dispatch(searchArtistsComplete(artists));
    }).catch(err => {
      dispatch(searchArtistsFailed(err));
    });
  };
}

export function searchArtistsComplete(artists) {
  return { type: SEARCH_ARTISTS_COMPLETE, artists };
}

export function searchArtistsFailed(error) {
  return { type: SEARCH_ARTISTS_FAILED, error };
}
