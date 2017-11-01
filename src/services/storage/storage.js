export class LocalStorage {
    getToken() {
        return localStorage.getItem('spotify-token');
    }

    setToken(tokenString) {
        localStorage.setItem('spotify-token', tokenString);
    }
}

export const storage = new LocalStorage();