import axios from 'axios';
import { storage } from '../storage/storage';
import { authHttp } from '../authHttp/authHttp';

class SpotifyService {
    searchArtist(artistName, offset = 0) {
        let searchParams = new URLSearchParams();
        searchParams.append('q', artistName);
        searchParams.append('type', 'artist');
        searchParams.append('offset', offset);
        return authHttp.get('https://api.spotify.com/v1/search?' + searchParams.toString())
            .then((res) => {
                return res.data.artists.items.map(artist => {
                    artist.image = artist.images[0] && artist.images[0].url;
                    return artist;
                });
            });
    }


    getArtistAlbums(id) {
        return authHttp.get(`https://api.spotify.com/v1/artists/${id}/albums`);
    };
}


export const spotifyService = new SpotifyService();