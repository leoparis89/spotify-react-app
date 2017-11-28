import React from 'react';

const ArtistProfile = (props) => {

  var divStyle = {
    backgroundImage: 'url(' + props.artist.image + ')',
    backgroundSize: 'cover'
    // WebkitTransition: 'all', // note the capital 'W' here
    // msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };

  const { artist } = props;
  return (


    <div>
      <div className="jumbotron"
        style={divStyle}
      ><h1>{artist.name}</h1>
      </div>
      {artist.genres.map(genre => {
        return (<span
          key={genre}
          className="label label-info"
        >{genre}</span>);
      })}
    </div >
  );
};

export default ArtistProfile;