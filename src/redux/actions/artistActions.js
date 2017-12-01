import  {getAlbums as getAlbumsFunc} from '../../services/spotify/spotify';
export const GET_ALBUMS_START = 'GET_ALBUMS_START';
export const GET_ALBUMS_COMPLETE = 'GET_ALBUMS_COMPLETE';
export const GET_ALBUMS_FAILED = 'GET_ALBUMS_FAILED';



export function getAlbums(artistId) {
  return dispatch => {
    dispatch(getAlbumsStart());
    getAlbumsFunc(artistId).then(res => {
      dispatch(getAlbumsComplete(res));
    });
  };
}
  
export function getAlbumsStart() {
  return { type: GET_ALBUMS_START };
}
  
export function getAlbumsComplete(result) {
  return { type: GET_ALBUMS_COMPLETE, result };
}
  
export function getAlbumsFailed() {
  return { type: GET_ALBUMS_FAILED };
}
  