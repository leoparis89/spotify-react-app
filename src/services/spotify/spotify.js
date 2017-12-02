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

const _buildGetAlbumUrl = (albumId) => {
  return `https://api.spotify.com/v1/albums/${albumId}`;
};

const _flatenImages = (items) => {
  return items.map((item) => {
    const [image] = item.images;
    item.image = image && image.url;
    return item;
  });
};

export const searchArtists = (artistName, offset = 0) => {
  return authGet(_buildSearchArtistUrl(artistName, offset))
    .then((res) => res.data)
    .then((res) => {
      return res.artists.items.map(artist => {
        const [image] = artist.images;
        artist.image = image && image.url;
        return artist;
      });
    });
};

export const getAlbums = (artistId, offset = 0) => {
  return authGet(_buildGetAlbumsUrl(artistId, offset))
    .then(res => res.data)
    .then(data => {
      let {total, offset, items: albums} = data;
      albums = _flatenImages(albums);
      return { total, offset, albums};
    })
    .catch((err) => {
    });
};

export const getAlbum = (albumId) => {
  return authGet(_buildGetAlbumUrl(albumId))
    .then(res => res.data)
    .then(data => {
      const {name,
          label,
          id,
          release_date,
          album_type, artists,
          tracks: {items: tracks},
          images: [{url: image}]} = data;
     // const [image] = images;
      //const {items: bar} = track
        return {id, name, label, release_date, album_type, artists, tracks, image};
    })
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