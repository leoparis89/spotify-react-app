import {profile} from './profilReducer';
import {getProfileComplete, getSavedAlbumsComplete} from '../actions/profileActions';

test('it should create initial state', () => {
  const expected = {
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
