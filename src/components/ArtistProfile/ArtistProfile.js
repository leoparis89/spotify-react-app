import React from 'react';
import AlbumCard from '../AlbumCard/AlbumCard';
import {Spiner} from '../Spinner/Spinner';
import PropTypes from 'prop-types';
const ArtistProfile = (props) => {

  const divStyle = {
    backgroundImage: 'url(' + props.artist.image + ')',
    backgroundSize: 'cover'
  };

  const {artist, albums, loading, saveAlbum, removeAlbum, savedAlbums} = props;
  const {followers} = artist;
  return (

    <div>
      <div className="jumbotron"
        style={divStyle}
      ><h1>{artist.name}   </h1>
        <div>
          {artist.genres.map(genre => {
            return (
              <h4 key={genre}> <span className="badge badge-pill badge-info">{genre}</span></h4>
            );
          })}
        </div>
        <h3><span className="badge badge-primary pull-right">followers: {followers}</span> </h3>
      </div>
      <div className="row">
        {albums.map(album => {
          return <AlbumCard
            key={album.id}
            album={album}
            saveAlbum={saveAlbum}
            removeAlbum={removeAlbum}
            isSaved={!!savedAlbums[album.id]}
          />;
        })}
      </div>
      {loading && <Spiner />}
    </div >
  );
};

export default ArtistProfile;

ArtistProfile.propTypes = {
  artist: PropTypes.object,
  albums: PropTypes.array,
  loading: PropTypes.bool,
  saveAlbum: PropTypes.func,
  removeAlbum: PropTypes.func,
  savedAlbums: PropTypes.object
};


