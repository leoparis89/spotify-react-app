import { storage } from '../storage/storage';
import {getCurrentEpochInSec} from "../utils/date";

export const logout = () => {
  storage.emptyStorage();
};

export const isLoggedIn = ()  => {
  const epochDateInSec = getCurrentEpochInSec();
  return !!localStorage.getItem('spotify-token') &&
      (epochDateInSec - localStorage.getItem('login-date') < 3600);
};