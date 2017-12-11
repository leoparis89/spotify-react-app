import {search} from './searchReducer';
import  * as actions from '../actions/searchActions';

test('it should create initial state', () => {
  const expected = {
    artists: [],
    query: null,
    offset: null,
    loading: false,
    total: null
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

test('set query should reset state correctly', () => {
  const initial = {
    artists: [{id:8}],
    query: 'foo',
    offset: 5,
    loading: true,
    total: 1
  };
  
  const expected = {
    artists: [],
    query: 'my search',
    offset: null,
    loading: false,
    total: null
  };
  
  expect(search(initial, actions.setQuery('my search'))).toEqual(expected);
});
