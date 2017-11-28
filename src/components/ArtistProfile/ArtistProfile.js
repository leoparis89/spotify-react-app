import React from 'react';

const ArtistProfile = (props) => {

  var divStyle = {
    backgroundImage: 'url(' + props.artist.image + ')'
    // WebkitTransition: 'all', // note the capital 'W' here
    // msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };


  return (
    <div>
      <div className="jumbotron"
        style={divStyle}
      ><h1>{props.artist.name}</h1>
      </div>
    </div >
  );
};

export default ArtistProfile;