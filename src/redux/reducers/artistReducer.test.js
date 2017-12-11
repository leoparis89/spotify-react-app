import {artist} from './artistReducer';
import  * as actions  from '../actions/artistActions';

test('it should create initial state', () => {
  const expected = {
    artist: {genres: []},
    albums: [],
    loading: false,
    wantedOffset: null,
    offset: null,
    total: null
  };

  expect(artist(undefined, {})).toEqual(expected);
});



describe('get albums start ',  () => {
  it('should set loading state to true and set wanted offset',  () => {
    const initial = {
      albums: [],
      loading: false,
      wantedOffset: null,
      offset: null,
      total: null
    };


    const expected = {
      albums: [],
      loading: true,
      wantedOffset: 20,
      offset: null,
      total: null
    };

    expect(artist(initial, actions.getAlbumsStart(20))).toEqual(expected);
  });
});


describe('get albums complete ',  () => {
  it('should recreate a new array of albums if wanted offset equals 0',  () => {
    const initial = {
      albums: [{cool: 'buz'}, {nice: 'go'}],
      loading: true,
      wantedOffset: 0,
      offset: null,
      total: null
    };


    const expected = {
      albums: [{foo: 'bar'}],
      loading: false,
      wantedOffset: 0,
      offset: 0,
      total: 12
    };

    expect(artist(initial, actions.getAlbumsComplete({offset:0, total:12, albums: [{foo: 'bar'}]})))
      .toEqual(expected);
  });
});

describe('get albums complete ',  () => {
  it('should acumulate on the album array if wanted offset bigger than zero',  () => {
    const initial = {
      albums: [{cool: 'buz'}, {nice: 'go'}],
      loading: true,
      wantedOffset: 10,
      offset: null,
      total: null
    };


    const expected = {
      albums: [{cool: 'buz'}, {nice: 'go'}, {foo: 'bar'}],
      loading: false,
      wantedOffset: 10,
      offset: 0,
      total: 12
    };

    expect(artist(initial, actions.getAlbumsComplete({offset:0, total:12, albums: [{foo: 'bar'}]})))
      .toEqual(expected);
  });
});
