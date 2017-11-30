
export const GET_ALBUMS_START = 'GET_ALBUMS_START';
export const GET_ALBUMS_COMPLETE = 'GET_ALBUMS_COMPLETE';
export const GET_ALBUMS_FAILED = 'GET_ALBUMS_FAILED';


export function getAlbums() {
  return dispatch => {
    dispatch(getAlbumsStart());
  };
}
  
export function getAlbumsStart() {
  return { type: GET_ALBUMS_START };
}
  
export function getAlbumsComplete(albums) {
  return { type: GET_ALBUMS_COMPLETE, albums };
}
  
export function getAlbumsFailed() {
  return { type: GET_ALBUMS_FAILED };
}
  