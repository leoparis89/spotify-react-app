import { authGet } from '../authHttp/authHttp';

const _buildSearchArtistUrl = (artistName, offset = 0) => {
  let searchParams = new URLSearchParams();
  searchParams.append('q', artistName);
  searchParams.append('type', 'artist');
  searchParams.append('offset', offset);
  return 'https://api.spotify.com/v1/search?' + searchParams.toString();
};

const _buildGetAlbumsUrl = (artistId, offset = 0) => {
  const params = new URLSearchParams();
  params.append('offset', offset);
  return `https://api.spotify.com/v1/artists/${artistId}/albums?${params.toString()}`;
};

export const searchArtists = (artistName, offset = 0) => {
  return authGet(_buildSearchArtistUrl(artistName, offset))
    .then((res) => {
      return res.data.artists.items.map(artist => {
        artist.image = artist.images[0] && artist.images[0].url;
        return artist;
      });
    });
};

export const getAlbums = (artistId, offset = 0) => {
  return authGet(_buildGetAlbumsUrl(artistId, offset))
    .then((res) => res.data)
    .catch((err) => {
    });
};

export const getUserInfo = () => {
  return authGet('https://api.spotify.com/v1/me')
    .then(res => res.data)
    .then((res => {
      let { email, id, followers, country } = res;
      return { email, id, followers, country };
    }));

};

export const getArtistAlbums = id => authGet(`https://api.spotify.com/v1/artists/${id}/albums`);