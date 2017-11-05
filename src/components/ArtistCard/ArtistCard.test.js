import React from 'react';
import ArtistCard from './ArtistCard';

import renderer from 'react-test-renderer';


describe('Artist card', () => {
    
    it('renders correctly', () => {
        const element = renderer.create(
            <div>hello</div>
        );

        console.log(element);
    });
    
});
