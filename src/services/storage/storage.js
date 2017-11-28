export class LocalStorage {
  getToken() {
    return localStorage.getItem('spotify-token');
  }

  setToken(tokenString) {
    localStorage.setItem('spotify-token', tokenString);
  }

  setLoginDate(date) {
    localStorage.setItem('login-date', date);
  }

  emptyStorage() {
    localStorage.removeItem('spotify-token');
    localStorage.removeItem('login-date');
  }
}

export const storage = new LocalStorage();