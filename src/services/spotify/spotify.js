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

const _buildGetArtistUrl = (id) => {
  return `https://api.spotify.com/v1/artists/${id}`;
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
    .then(extractData)
    .then((data) => {
      let {total, offset, items: artists} = data.artists;
      artists = _flatenImages(artists);
      return { total, offset, artists};
    });
};

export const getArtist = (id) => {
  return authGet(_buildGetArtistUrl(id))
    .then(extractData)
    .then((data) => {
      data.image = data.images[1].url;
      data.followers = data.followers.total;
      return data;
    });
};

export const getAlbums = (artistId, offset = 0) => {
  return authGet(_buildGetAlbumsUrl(artistId, offset))
    .then(extractData)
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
    .then(extractData)
    .then(data => {
      const {
        id,
        name,
        label,
        release_date,
        album_type, artists,
        tracks: {items: tracks},
        images: [{url: image}]} = data;
      return {id, name, label, release_date, album_type, artists, tracks, image};
    })
    .catch((err) => {
    });
};

export const getUserInfo = () => {
  return authGet('https://api.spotify.com/v1/me')
    .then(extractData)
    .then((res => {
      let { email, id, followers, country } = res;
      return { email, id, followers, country };
    }));
};

export const extractData = res => res.data;

export const getArtistAlbums = id => authGet(`https://api.spotify.com/v1/artists/${id}/albums`);
