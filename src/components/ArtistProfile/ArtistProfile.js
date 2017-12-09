import React from 'react';
import AlbumCard from '../AlbumCard/AlbumCard';
const ArtistProfile = (props) => {

  var divStyle = {
    backgroundImage: 'url(' + props.artist.image + ')',
    backgroundSize: 'cover'
  };

  const { artist, albums } = props;
  const { followers } = artist;
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
          console.log(album);
          return <AlbumCard key={album.id} album={album} />;
        })}
      </div>
    </div >
  );
};

export default ArtistProfile;


