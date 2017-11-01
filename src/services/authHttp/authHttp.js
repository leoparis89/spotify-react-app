import axios from 'axios';
import { storage } from '../storage/storage';

class AuthHttp {

    get(url) {
        let config = {
            headers: { 'Authorization': 'Bearer ' + storage.getToken() }
        };
        return axios.get(url, config);
    }
}

export const authHttp = new AuthHttp();