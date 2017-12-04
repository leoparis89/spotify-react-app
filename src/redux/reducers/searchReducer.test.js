import {search} from './searchReducer';
import  * as actions from '../actions/searchActions';

test('it should create initial state', () => {
  const expected = {
    results: [],
    query: null,
    offset: null,
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

test('set query should reset state corectly', () => {
  const initial = {
    results: [{id:8}],
    query: 'foo',
    offset: 5,
    loading: true
  };
  
  const expected = {
    results: [],
    query: 'my search',
    offset: null,
    loading: false
  };
  
  expect(search(initial, actions.setQuery('my search'))).toEqual(expected);
});
