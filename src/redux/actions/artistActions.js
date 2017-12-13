import {getAlbums as getAlbumsFunc,
  getArtist as getArtistFunc,
  saveAlbum as saveAlbumFunc} from '../../services/spotify/spotify';
import {notifyInfo} from '../../services/utils/toast';
export const GET_ALBUMS_START = 'GET_ALBUMS_START';
export const GET_ALBUMS_COMPLETE = 'GET_ALBUMS_COMPLETE';
export const GET_ALBUMS_FAILED = 'GET_ALBUMS_FAILED';
export const GET_ARTIST_START = 'GET_ARTIST_START';
export const GET_ARTIST_COMPLETE = 'GET_ARTIST_COMLETE';
export const GET_ARTIST_FAILED = 'GET_ARTIST_FAILED';
export const SAVE_ALBUM_START = 'SAVE_ALBUM_START';
export const SAVE_ALBUM_COMPLETE = 'SAVE_ALBUM_COMPLETE';
export const SAVE_ALBUM_FAILED = 'SAVE_ALBUM_FAILED';


export function getAlbums(artistId, offset) {
  return dispatch => {
    dispatch(getAlbumsStart(offset));
    getAlbumsFunc(artistId, offset).then(res => {
      dispatch(getAlbumsComplete(res));
    });
  };
}

export function getArtist(id, offset) {
  return dispatch => {
    dispatch(getArtistStart(id));
    getArtistFunc(id).then(artist => {
      
      dispatch(getArtistComplete(artist));
    });
  };
}

export function saveAlbum(id) {
  return dispatch => {
    dispatch(saveAlbumStart());
    saveAlbumFunc(id)
      .then(res => {
        notifyInfo('album saved!');
        dispatch(saveAlbumComplete());
      })
      .catch(err => {
        dispatch(saveAlbumFailed());
      });
  };
}

export function getAlbumsStart(wantedOffset) {
  return {type: GET_ALBUMS_START, wantedOffset};
}
  
export function getAlbumsComplete(result) {
  return {type: GET_ALBUMS_COMPLETE, result};
}
  
export function getAlbumsFailed() {
  return {type: GET_ALBUMS_FAILED};
}

export function getArtistStart(id) {
  return {type: GET_ARTIST_START, id};
}

export function getArtistComplete(artist) {
  return {type: GET_ARTIST_COMPLETE, artist};
}

export function getArtistFailed() {
  return {type: GET_ARTIST_FAILED};
}

export function saveAlbumStart(id) {
  return {type: SAVE_ALBUM_START, id};
}

export function saveAlbumComplete() {
  return {type: SAVE_ALBUM_COMPLETE};
}

export function saveAlbumFailed() {
  return {type: SAVE_ALBUM_FAILED};
}
