import {authGet, authPut} from '../authHttp/authHttp';
import {encodeQueryData} from '../utils/ajax';

const baseUrl= 'https://api.spotify.com/v1';

export const _buildSearchArtistUrl = (artistName, offset = 0) => {
  const params = {q: artistName, type: 'artist', offset: offset};
  return `https://api.spotify.com/v1/search?${encodeQueryData(params)}`;
};



export const _buildGetAlbumsUrl = (artistId, offset = 0) => {
  const params = {offset};
  return `${baseUrl}/artists/${artistId}/albums?${encodeQueryData(params)}`;
};

export const _buildGetAlbumUrl = (albumId) => {
  return `${baseUrl}/albums/${albumId}`;
};

export const _buildGetArtistUrl = (id) => {
  return `${baseUrl}/artists/${id}`;
};

export const _buildSaveAlbumtUrl = (id) => {
  return `${baseUrl}/me/albums?ids=${id}`;
};

export const _buildGetSavedAlbumstUrl = () => {
  return `${baseUrl}/me/albums`;
};

export const _flatenImages = (items) => {
  return items.map((item) => _setImage(item));
};

export const _formatSavedAlbum = (item) => {
  const {added_at, album} = item;
  return {added_at, ...album};
};

export const _onSavedAlbumsReceived = () => {
  
};

export const _setImage = (el) => {
  const [image] = el.images;
  delete el.images;
  el.image = image && image.url;
  return el;
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
    .catch(() => {
      
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
    .catch(() => {
    });
};

export const getUserInfo = () => {
  return authGet(`${baseUrl}/me`)
    .then(extractData)
    .then((res => {
      let {email, id, followers, country} = res;
      return {email, id, followers, country};
    }));
};

export const saveAlbum = (id) => {
  return authPut(_buildSaveAlbumtUrl(id))
    .then(() => {
    })
    .catch(() => {
    });
};

export const getSavedAlbums = () => {
  return authGet(_buildGetSavedAlbumstUrl())
    .then(extractData)
    .then((res) => {
      let {items} = res;
      items = items
        .map(i => _formatSavedAlbum(i))
        .map(i => _setImage(i));
      debugger;
      return items;
    });
};

export const getArtistAlbums = id => authGet(`https://api.spotify.com/v1/artists/${id}/albums`);
const extractData = res => res.data;
