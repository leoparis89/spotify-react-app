import { storage } from '../storage/storage';

class Authentication {

  logout() {
    storage.emptyStorage();
  }

  isLoggedIn() {
    return !!localStorage.getItem('spotify-token');
  }
}

export const authentication = new Authentication();