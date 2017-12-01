import  {getAlbum as getAlbumFunc} from '../../services/spotify/spotify';
export const GET_ALBUM_START = 'GET_ALBUM_START';
export const GET_ALBUM_COMPLETE = 'GET_ALBUM_COMPLETE';
export const GET_ALBUM_FAILED = 'GET_ALBUM_FAILED';



export function getAlbum(albumId) {
  return dispatch => {
    debugger;
      getAlbumFunc(albumId).then((res => {
          debugger;
      }))
    dispatch(getAlbumStart());
    // getAlbumsFunc(artistId).then(res => {
    //   dispatch(getAlbumsComplete(res));
    // });
  };
}
  
export function getAlbumStart() {
  return { type: GET_ALBUM_START };
}
  
export function getAlbumComplete(result) {
  return { type: GET_ALBUM_COMPLETE, result };
}
  
export function getAlbumFailed() {
  return { type: GET_ALBUM_FAILED };
}
  