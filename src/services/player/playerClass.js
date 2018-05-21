export let player = null;


export const SpotifyReady = new Promise((res, rej) => {
  window.onSpotifyWebPlaybackSDKReady = () => {
    debugger;
    res('bar');
  };
});


// const getPlayer = token => {
//   return new Promise((res, rej) => {
//
//
//
//   });
// };

// window.onSpotifyWebPlaybackSDKReady = () => {
  // const token = storage.getToken();

  
  //playerReady = true;
  //const token = storage.getToken();

  // if (token) {
  //   initPlayer(token);
  // }
// };
