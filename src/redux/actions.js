/*
 * action types
 */

export const SEARCH_ARTISTS = 'SEARCH_ARTISTS';
// export const TOGGLE_TODO = 'TOGGLE_TODO';
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action creators
 */

export function searchArtists(query) {
    return { type: SEARCH_ARTISTS, query };
}
