const getSDKReadyState = new Promise(res => {
  window.onSpotifyWebPlaybackSDKReady = () =>
    res(true);
});

export default getSDKReadyState;
