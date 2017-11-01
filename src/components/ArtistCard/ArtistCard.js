import React from 'react';

const ArtistCard = (props) => {
  return (
    <div className="col-md-3">
      <h3>
      {props.artist.name}
      </h3>
      {props.artist.images[0] ? 
        <img src={props.artist.images[0].url}
          className="img-responsive"
         alt={props.artist.name} />
        : '' }
    </div>
  );
}

export default ArtistCard;
