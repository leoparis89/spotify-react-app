import axios from 'axios';
import {storage} from '../storage/storage';

const config = {
  headers: {'Authorization': 'Bearer ' + storage.getToken()}
};

export const authGet = (url) => {
  return axios.get(url, config);
};

export const authPut = (url) => {
  return axios.put(url, config);
};

