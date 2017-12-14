import {getUserInfo, getSavedAlbums as getSavedAlbumsFunc} from '../../services/spotify/spotify';

export const GET_PROFILE_START = 'GET_PROFILE_START';
export const GET_PROFILE_COMPLETE = 'GET_PROFILE_COMPLETE';
export const GET_PROFILE_FAILED = 'GET_PROFILE_FAILED';
export const GET_SAVED_ALBUMS_START = 'GET_SAVED_ALBUMS_START';
export const GET_SAVED_ALBUMS_COMPLETE = 'GET_SAVED_ALBUMS_COMPLETE';
export const GET_SAVED_ALBUMS_FAILED = 'GET_SAVED_ALBUMS_FAILED';


export function getProfile() {
  return dispatch => {
    dispatch(getProfileStart());
    dispatch(getSavedAlbums());
    getUserInfo().then((profile)=> {
      dispatch(getProfileComplete(profile));
    },
    err => {
      dispatch(getProfileFailed());
    });
  };
}

export function getSavedAlbums() {
  return dispatch => {
    dispatch(getSavedAlbumsStart());
    getSavedAlbumsFunc().then((albums)=> {
      dispatch(getSavedAlbumsComplete(albums));
    },
    err => {
      dispatch(getSavedAlbumsFailed());
    });
  };
}

export function getProfileStart() {
  return {type: GET_PROFILE_START};
}
  
export function getProfileComplete(profile) {
  return {type: GET_PROFILE_COMPLETE, profile};
}
  
export function getProfileFailed() {
  return {type: GET_PROFILE_FAILED};
}

export function getSavedAlbumsStart() {
  return {type: GET_SAVED_ALBUMS_START};
}

export function getSavedAlbumsComplete(albums) {
  return {type: GET_SAVED_ALBUMS_COMPLETE, albums};
}

export function getSavedAlbumsFailed() {
  return {type: GET_SAVED_ALBUMS_FAILED};
}
