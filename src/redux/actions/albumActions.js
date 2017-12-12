import {getAlbum as getAlbumFunc} from '../../services/spotify/spotify';
export const GET_ALBUM_START = 'GET_ALBUM_START';
export const GET_ALBUM_COMPLETE = 'GET_ALBUM_COMPLETE';
export const GET_ALBUM_FAILED = 'GET_ALBUM_FAILED';



export function getAlbum(albumId) {
  return dispatch => {
    dispatch(getAlbumStart());
    getAlbumFunc(albumId).then((albumData => {
      dispatch(getAlbumComplete(albumData));
    }));
  };
}
  
export function getAlbumStart() {
  return { type: GET_ALBUM_START };
}
  
export function getAlbumComplete(albumData) {
  return { type: GET_ALBUM_COMPLETE, albumData };
}
  
export function getAlbumFailed() {
  return { type: GET_ALBUM_FAILED };
}
  
