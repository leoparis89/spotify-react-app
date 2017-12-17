import {
  _buildGetAlbumsUrl, _buildGetAlbumUrl, _buildGetArtistUrl, _buildGetSavedAlbumstUrl, _buildSaveAlbumtUrl,
  _buildSearchArtistUrl, _formatSavedAlbum, _setImage, getAllData
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

  expect(_buildGetSavedAlbumstUrl(3)).toEqual(
    'https://api.spotify.com/v1/me/albums?offset=3'
  );
});

test('setImage should mutate object correctly', () => {
  expect( _setImage({images: [{url: 'foo'}]})).toEqual({image: 'foo'});
  expect( _setImage({images: []})).toEqual({});
});


test('format saved album should format album corectly', () => {
  expect(_formatSavedAlbum({added_at: 'bar', album: {id:'a'}})).toEqual( {added_at: 'bar', id:'a'});
});



const getMockData = (offset) => {
  const total = 20;
  const promise = Promise.resolve({items: [
    {foo: 'bar'},
    {foo: 'bar'},
    {foo: 'bar'},
    {foo: 'bar'},
    {foo: 'bar'},
  ], offset, total});
  return promise;
};

test('get all data should should get the totality of elements', () => {
  getAllData(getMockData).then(data => {
    expect(data[0]).toEqual({foo: 'bar'});
    expect(data.length).toEqual(20);
  });
});
