import axios from 'axios';
import { storage } from '../storage/storage';

class Authentication {

    logout() {
        localStorage.removeItem('spotify-token');
    }

    isLoggedIn() {
        return !!localStorage.getItem('spotify-token');
    }
}

export const authentication = new Authentication();