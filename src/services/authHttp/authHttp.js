import axios from 'axios';
import { storage } from '../storage/storage';

export const authGet = (url) => {
  const config = {
    headers: { 'Authorization': 'Bearer ' + storage.getToken() }
  };
  return axios.get(url, config);
};
