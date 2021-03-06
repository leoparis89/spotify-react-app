import {getAlbums as getAlbumsFunc,
  getArtist as getArtistFunc,
  saveAlbum as saveAlbumFunc,
  removeAlbum as removeAlbumFunc
} from '../../services/spotify/spotify';
import {notifyInfo} from '../../services/utils/toast';
import {getSavedAlbums} from './profileActions';
export const GET_ALBUMS_START = 'GET_ALBUMS_START';
export const GET_ALBUMS_COMPLETE = 'GET_ALBUMS_COMPLETE';
export const GET_ALBUMS_FAILED = 'GET_ALBUMS_FAILED';
export const GET_ARTIST_START = 'GET_ARTIST_START';
export const GET_ARTIST_COMPLETE = 'GET_ARTIST_COMLETE';
export const GET_ARTIST_FAILED = 'GET_ARTIST_FAILED';
export const SAVE_ALBUM_START = 'SAVE_ALBUM_START';
export const SAVE_ALBUM_COMPLETE = 'SAVE_ALBUM_COMPLETE';
export const SAVE_ALBUM_FAILED = 'SAVE_ALBUM_FAILED';
export const REMOVE_ALBUM_START = 'REMOVE_ALBUM_START';
export const REMOVE_ALBUM_COMPLETE = 'REMOVE_ALBUM_COMPLETE';
export const REMOVE_ALBUM_FAILED = 'REMOVE_ALBUM_FAILED';


export function getAlbums(artistId, offset) {
  return dispatch => {
    dispatch(getAlbumsStart(offset));
    getAlbumsFunc(artistId, offset).then(res => {
      dispatch(getAlbumsComplete(res));
    });
  };
}

export function getArtist(id) {
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
      .then(() => {
        notifyInfo('album saved!');
        dispatch(getSavedAlbums());
        dispatch(saveAlbumComplete());
      })
      .catch(() => {
        dispatch(saveAlbumFailed());
      });
  };
}

export function removeAlbum(id) {
  return dispatch => {
    dispatch(removeAlbumStart());
    removeAlbumFunc(id)
      .then(() => {
        dispatch(getSavedAlbums());
        dispatch(removeAlbumComplete());
      })
      .catch(() => {
        dispatch(removeAlbumFailed());
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

export function removeAlbumStart(id) {
  return {type: REMOVE_ALBUM_START, id};
}

export function removeAlbumComplete() {
  return {type: REMOVE_ALBUM_COMPLETE};
}

export function removeAlbumFailed() {
  return {type: REMOVE_ALBUM_FAILED};
}
