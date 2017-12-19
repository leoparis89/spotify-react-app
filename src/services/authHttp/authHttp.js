import axios from 'axios';
import {storage} from '../storage/storage';

const buildHeaders = () => ({headers: {'Authorization': 'Bearer ' + storage.getToken()}});

export const authGet = (url) => {
  return axios.get(url, buildHeaders());
};

export const authPut = (url, data = {}) => {
  return axios.put(url, data, buildHeaders());
};

export const authDel = (url) => {
  return axios.delete(url, buildHeaders());
};

