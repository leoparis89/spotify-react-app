import {getUserInfo} from '../../services/spotify/spotify';

export const GET_PROFILE_START = 'GET_PROFILE_START';
export const GET_PROFILE_COMPLETE = 'GET_PROFILE_COMPLETE';
export const GET_PROFILE_FAILED = 'GET_PROFILE_FAILED';


export function getProfile() {
  return dispatch => {
    dispatch(getProfileStart());
    getUserInfo().then((profile)=> {
      dispatch(getProfileComplete(profile));
    },
    err => {
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
  
