import {profile} from './profilReducer';
import {getProfileComplete, getSavedAlbumsComplete} from '../actions/profileActions';
import {removeAlbumComplete, saveAlbumComplete} from '../actions/artistActions';

test('it should create initial state', () => {
  const expected = {
    savedAlbums: {},
    recentlyAddedAlbums: 0
  };

  expect(profile(undefined, {})).toEqual(expected);
});

test('GET_PROFILE_COMPLETE case should return correct state', () => {
  const initial = {
  };

  const expected = {
    foo: 'bar',
    cool: 'baz'
  };
  expect(profile(initial, getProfileComplete({foo: 'bar', cool: 'baz'}))).toEqual(expected);
});

test('GET_SAVED_ALBUMS_COMPLETE case should return correct state', () => {
  const initial = {
  };

  const expected = {
    savedAlbums: {'xyz': 'master', 'abc': 'black'}
  };
  expect(profile(initial, getSavedAlbumsComplete({'xyz': 'master', 'abc': 'black'}))).toEqual(expected);
});

test('SAVE_ALBUM_COMPLETE case should return correct state', () => {
  const initial = {
    savedAlbums: {},
    recentlyAddedAlbums: 5
  };

  const expected = {
    savedAlbums: {},
    recentlyAddedAlbums: 6
  };
  expect(profile(initial, saveAlbumComplete())).toEqual(expected);
});

test('REMOVE_ALBUM_COMPLETE case should return correct state', () => {
  let initial = {
    savedAlbums: {},
    recentlyAddedAlbums: 5
  };

  let expected = {
    savedAlbums: {},
    recentlyAddedAlbums: 4
  };
  expect(profile(initial, removeAlbumComplete())).toEqual(expected);

  initial = {
    savedAlbums: {},
    recentlyAddedAlbums: 0
  };

  expected = {
    savedAlbums: {},
    recentlyAddedAlbums: 0
  };
  expect(profile(initial, removeAlbumComplete())).toEqual(expected);
});
