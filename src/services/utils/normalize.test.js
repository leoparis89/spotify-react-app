import {normalize} from './normalize';

test('get all data should should get the totality of elements', () => {
  const input = [{id: 4, foo: 'bar'}, {id: 5, foo: 'kik'}, {id: 6, foo: 'tut'}];
  const output = {'4': {id: 4, foo: 'bar'}, '5': {id: 5, foo: 'kik'}, '6': {id: 6, foo: 'tut'}};
  expect(normalize(input)).toEqual(output);
});
