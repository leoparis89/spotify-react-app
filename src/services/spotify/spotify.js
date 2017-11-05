import { authGet } from '../authHttp/authHttp';

export const searchArtist = (artistName, offset = 0) => {
    let searchParams = new URLSearchParams();
    searchParams.append('q', artistName);
    searchParams.append('type', 'artist');
    searchParams.append('offset', offset);
    return authGet('https://api.spotify.com/v1/search?' + searchParams.toString())
        .then((res) => {
            return res.data.artists.items.map(artist => {
                artist.image = artist.images[0] && artist.images[0].url;
                return artist;
            });
        });
};

export const getArtistAlbums = id => authGet(`https://api.spotify.com/v1/artists/${id}/albums`);