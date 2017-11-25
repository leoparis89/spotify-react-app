/*
 * action types
 */

import { searchArtist } from '../services/spotify/spotify';

export const SEARCH_ARTISTS = 'SEARCH_ARTISTS';
export const SET_QUERY = 'SET_QUERY';
export const SEARCH_ARTISTS_COMPLETE = 'SEARCH_ARTISTS_COMPLETE';
export const SEARCH_ARTISTS_FAILED = 'SEARCH_ARTISTS_FAILED';

export function searchArtists(query) {
  return dispatch => {
    searchArtist(query).then(results => {
      dispatch(searchArtistsComplete(results));
    }).catch(err => {
      dispatch(searchArtistsFailed(err));
    });
  };
}

export function searchArtistsComplete(results) {
  return { type: SEARCH_ARTISTS_COMPLETE, results };
}

export function searchArtistsFailed(error) {
  return { type: SEARCH_ARTISTS_FAILED, error };
}

export function setQuery(query) {
  return { type: SET_QUERY, query };
}