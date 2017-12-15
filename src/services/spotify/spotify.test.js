import {
  _buildGetAlbumsUrl, _buildGetAlbumUrl, _buildGetArtistUrl, _buildGetSavedAlbumstUrl, _buildSaveAlbumtUrl,
  _buildSearchArtistUrl, _setImage
} from './spotify';


test('Spotify functions call the right urls', () => {
  expect(_buildSearchArtistUrl('foo', 3)).toEqual(
    'https://api.spotify.com/v1/search?q=foo&type=artist&offset=3'
  );

  expect(_buildSearchArtistUrl('bar')).toEqual(
    'https://api.spotify.com/v1/search?q=bar&type=artist&offset=0'
  );

  expect(_buildGetAlbumsUrl('foo', 3)).toEqual(
    'https://api.spotify.com/v1/artists/foo/albums?offset=3'
  );

  expect(_buildGetAlbumsUrl('foo')).toEqual(
    'https://api.spotify.com/v1/artists/foo/albums?offset=0'
  );
  expect(_buildGetAlbumUrl('fff')).toEqual(
    'https://api.spotify.com/v1/albums/fff'
  );

  expect(_buildGetArtistUrl('fff')).toEqual(
    'https://api.spotify.com/v1/artists/fff'
  );

  expect(_buildSaveAlbumtUrl('fff')).toEqual(
    'https://api.spotify.com/v1/me/albums?ids=fff'
  );

  expect(_buildGetSavedAlbumstUrl('fff')).toEqual(
    'https://api.spotify.com/v1/me/albums'
  );
});

test('setImage should mutate object correctly', () => {
  expect( _setImage({images: [{url: 'foo'}]})).toEqual({image: 'foo'});
  expect( _setImage({images: []})).toEqual({});
});


