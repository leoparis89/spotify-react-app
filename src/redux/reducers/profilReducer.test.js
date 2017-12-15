import {profile} from './profilReducer';
import {getProfileComplete} from '../actions/profileActions';

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
