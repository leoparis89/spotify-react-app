import {storage} from '../storage/storage';
import SpotifyWebApi from 'spotify-web-api-js';

const token = storage.getToken();
const spotifyApi = new SpotifyWebApi();

export const setToken = token => {
  spotifyApi.setAccessToken(token);
};

export const getDevices = () => {

  spotifyApi.getMyDevices(dev => {
    debugger;
  });

  
};
