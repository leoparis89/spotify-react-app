import axios from 'axios';
import { storage } from '../storage/storage';
import { authHttp } from '../authHttp/authHttp';

class SpotifyService {
    searchArtist(artistName) {
        let searchParams = new URLSearchParams();
        searchParams.append('q', artistName)
        searchParams.append('type', 'artist')
        return authHttp.get('https://api.spotify.com/v1/search?' + searchParams.toString())
            .then((res) => {
                return res.data.artists.items;
            });
    }
}

export const spotifyService = new SpotifyService();