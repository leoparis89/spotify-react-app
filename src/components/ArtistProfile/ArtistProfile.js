import React from 'react';

const ArtistProfile = (props) => {
  return (
    <div>
      <h1>{props.artist.name}</h1>
      <img src={props.artist.image}
        className="img-responsive"
        alt={props.artist.name} />
    </div>
  );
};

export default ArtistProfile;