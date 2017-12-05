import React from 'react';
const Artist = (props) => {

  const {name, release_date, label, album_type, artists, image, tracks} = props;
  return (
    <div>bar
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={image}
              className="img-responsive"
              alt={name} />
          </div>
          <div className="col-6">
            <h1>{name}</h1>
            {tracks.map(track => {
              return (<div>{track.name}</div>);
            })}
          </div>
        </div>
      </div>
    </div>);
};

export default Artist;
