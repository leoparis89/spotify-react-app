import {album} from './albumReducer';

test('it should create initial state', () => {
  const expected = {
    tracks: [],
    loading: false
  };

  expect(album(undefined, {})).toEqual(expected);
});
