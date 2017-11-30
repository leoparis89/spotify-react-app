export const GET_PROFILE_START = 'GET_PROFILE_START';
export const GET_PROFILE_COMPLETE = 'GET_PROFILE_COMPLETE';
export const GET_PROFILE_FAILED = 'GET_PROFILE_FAILED';


export function getProfile() {
  return dispatch => {
    dispatch(getProfileStart());
  };
}
  
export function getProfileStart() {
  return { type: GET_PROFILE_START };
}
  
export function getProfileComplete() {
  return { type: GET_PROFILE_COMPLETE };
}
  
export function getProfileFailed() {
  return { type: GET_PROFILE_FAILED };
}
  