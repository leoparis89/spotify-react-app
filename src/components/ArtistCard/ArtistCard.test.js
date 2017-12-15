import React from 'react';
import ArtistCard from './ArtistCard';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router';


describe('Artist card', () => {
    
  const testProps = {
    artist: {
      id:'xyz',
      name:'metallica',
      image: 'htpp://foobar'
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <ArtistCard {...testProps}/>
      </MemoryRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
    
});
