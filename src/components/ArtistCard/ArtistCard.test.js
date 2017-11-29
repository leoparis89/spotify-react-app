import React from 'react';
import ArtistCard from './ArtistCard';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router';


describe('Artist card', () => {
    
  it('renders correctly', () => {
    const element = renderer.create(
      <MemoryRouter>
        <ArtistCard artist={{id: 5, name: 'cool', image: 'http://bar'}}/>
      </MemoryRouter>
    );

    console.log(element);
  });
    
});
