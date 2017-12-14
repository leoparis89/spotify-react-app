import {authGet, authPut} from '../authHttp/authHttp';
import {encodeQueryData} from '../utils/ajax';

<<<<<<< HEAD
export const _buildSearchArtistUrl = (artistName, offset = 0) => {
  // let searchParams = new URLSearchParams();
  // searchParams.append('q', artistName);
  // searchParams.append('type', 'artist');
  // searchParams.append('offset', offset);
  const params = {q: artistName, type: 'artist', offset: offset};
  return `https://api.spotify.com/v1/search?${encodeQueryData(params)}`;
=======
const baseUrl = 'https://api.spotify.com/v1';

const _buildSearchArtistUrl = (artistName, offset = 0) => {
  let searchParams = new URLSearchParams();
  searchParams.append('q', artistName);
  searchParams.append('type', 'artist');
  searchParams.append('offset', offset);
  return `${baseUrl}/search?${searchParams.toString()}`;
>>>>>>> b92881e07e4bba6464bfd8ad4a7544d3720aabdd
};

export const _buildGetAlbumsUrl = (artistId, offset = 0) => {
  const params = new URLSearchParams();
  params.append('offset', offset);
  return `${baseUrl}/artists/${artistId}/albums?${params.toString()}`;
};

<<<<<<< HEAD
export const _buildGetAlbumUrl = (albumId) => {
  return `https://api.spotify.com/v1/albums/${albumId}`;
};

export const _buildGetArtistUrl = (id) => {
  return `https://api.spotify.com/v1/artists/${id}`;
};

export const _buildSaveAlbumtUrl = (id) => {
  return `https://api.spotify.com/v1/me/albums?ids=${id}`;
=======
const _buildGetAlbumUrl = (albumId) => {
  return `${baseUrl}/albums/${albumId}`;
};

const _buildGetArtistUrl = (id) => {
  return `${baseUrl}/artists/${id}`;
};

const _buildSaveAlbumtUrl = (id) => {
  return `${baseUrl}/me/albums?ids=${id}`;
};

const _buildGetSavedAlbumstUrl = () => {
  return `${baseUrl}/me/albums`;
>>>>>>> b92881e07e4bba6464bfd8ad4a7544d3720aabdd
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
      return {total, offset, artists};
    });
};

export const getArtist = (id) => {
  return authGet(_buildGetArtistUrl(id))
    .then(extractData)
    .then((data) => {
      const {images, followers: {total: followers}} = data;
      let image;
      images.length && ([{url: image}] = images);
      return {...data, image, followers};
    });
};

export const getAlbums = (artistId, offset = 0) => {
  return authGet(_buildGetAlbumsUrl(artistId, offset))
    .then(extractData)
    .then(data => {
      let {total, offset, items: albums} = data;
      albums = _flatenImages(albums);
      return {total, offset, albums};
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
      let {email, id, followers, country} = res;
      return {email, id, followers, country};
    }));
};

export const saveAlbum = (id) => {
  return authPut(_buildSaveAlbumtUrl(id))
    .then((res) => {
    })
    .catch(err => {
    });
};

export const getSavedAlbums = () => {
  return authGet(_buildGetSavedAlbumstUrl())
    .then(extractData)
    .then((res) => {
      return res.items;
    });
};

export const getArtistAlbums = id => authGet(`https://api.spotify.com/v1/artists/${id}/albums`);
const extractData = res => res.data;
