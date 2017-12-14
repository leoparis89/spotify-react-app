import {_buildSearchArtistUrl} from './spotify';


test('Spotify functions call the right urls', () => {
  expect(_buildSearchArtistUrl('foo', 3)).toEqual(
    'https://api.spotify.com/v1/search?q=foo&type=artist&offset=3'
  );
});
