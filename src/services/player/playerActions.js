import SpotifyApi from 'spotify-web-api-js';
import {storage} from '../storage/storage';
const spotifyApi = new SpotifyApi();

spotifyApi.setAccessToken(storage.getToken());


export const test = () => {
  spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
    if (err) console.error(err);
    else console.log('Artist albums', data);
  });
};

export const getDevices = () => {
  spotifyApi.getMyDevices((err, res)=> {
    console.log(res);
  });
};


export const play = () => {
  spotifyApi.play((err, res)=> {
    console.log(res);
  });
};
