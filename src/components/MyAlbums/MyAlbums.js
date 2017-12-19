import React from 'react';
import AlbumCard from '../AlbumCard/AlbumCard';
import PropTypes from 'prop-types';
export const MyAlbums = ({savedAlbums, removeAlbum}) => {

  return (<div>
    {
      <div className="row">
        {
          Object.keys(savedAlbums)
            .map(id => <AlbumCard key={id} album={savedAlbums[id]} isSaved={true}
              removeAlbum={removeAlbum}
            />)
        }
      </div>
    }
  </div>);
};

MyAlbums.propTypes = {
  savedAlbums: PropTypes.object,
  removeAlbum: PropTypes.func
};




