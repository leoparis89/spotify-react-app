import {search} from './searchReducer';
import  * as actions from '../actions';

test('it should create initial state', () => {
  const expected = {
    results: [],
    query: null,
    offset: 0,
    loading: false
  };
  
  expect(search(undefined, {})).toEqual(expected);
});

test('search artist start should enable loading state', () => {
  const initial = {
    results: [{id:8}],
    query: 'foo',
    offset: 5,
    loading: false
  };
  
  const expected = {
    results: [{id:8}],
    query: 'foo',
    offset: 5,
    loading: true
  };
  
  expect(search(initial, actions.searchArtistsStart('metallica'))).toEqual(expected);
});
