import {getAlbums as getAlbumsFunc, getArtist as getArtistFunc} from '../../services/spotify/spotify';
export const GET_ALBUMS_START = 'GET_ALBUMS_START';
export const GET_ALBUMS_COMPLETE = 'GET_ALBUMS_COMPLETE';
export const GET_ALBUMS_FAILED = 'GET_ALBUMS_FAILED';
export const GET_ARTIST_START = 'GET_ARTIST_START';
export const GET_ARTIST_COMPLETE = 'GET_ARTIST_COMLETE';
export const GET_ARTIST_FAILED = 'GET_ARTIST_FAILED';


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
