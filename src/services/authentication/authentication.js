import { storage } from '../storage/storage';

export const logout = () => {
  storage.emptyStorage();
};

export const isLoggedIn = ()  => {
  return !!localStorage.getItem('spotify-token');
};