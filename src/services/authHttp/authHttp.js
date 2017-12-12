import axios from 'axios';
import {storage} from '../storage/storage';

const buildHeaders = () => ({headers: {'Authorization': 'Bearer ' + storage.getToken()}});

export const authGet = (url) => {
  return axios.get(url, buildHeaders());
};

export const authPut = (url) => {
  return axios.put(url, buildHeaders());
};

