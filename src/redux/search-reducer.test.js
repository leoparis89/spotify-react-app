import {search} from './reducers';


test('it should create initial state', () => {
  const expected = {
    results: [],
    query: null,
    offset: 0,
    loading: false
  };
  
  expect(search(undefined, {})).toEqual(expected);
});