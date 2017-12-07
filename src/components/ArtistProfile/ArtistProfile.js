import React from 'react';
import AlbumCard from '../AlbumCard/AlbumCard';
const ArtistProfile = (props) => {

  var divStyle = {
    backgroundImage: 'url(' + props.artist.image + ')',
    backgroundSize: 'cover'
  };

  const { artist, albums } = props;
  return (

    <div>
      <div className="jumbotron"
        style={divStyle}
      ><h1>{artist.name}</h1>
      </div>
      <div>
        {artist.genres.map(genre => {
          return (
              <span>      <h4> <span className="badge badge-pill badge-success">{genre}</span></h4></span>
          );
        })}
      </div>
      <div className="row">
        {albums.map(album => {
          console.log(album);
          return <AlbumCard key={album.id} album={album} />;
        })}
      </div>
    </div >
  );
};

export default ArtistProfile;


