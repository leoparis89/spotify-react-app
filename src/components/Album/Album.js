import React from 'react';
const Artist = (props) => {

  const {name, release_date, label, album_type, artists, image, tracks} = props;
  return (
    <div>
      <div className="container">

        <div className="row">
          <div className="col-6">
            <img src={image}
              className="img-fluid"
              alt={name} />
          </div>
          <div className="col-6">
            <h3>{name}  </h3>
            <h4>tracks: </h4>
            <ul class="list-group">
              {tracks.map(track => {
                return (<li className="list-group-item">{track.name}</li>);
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>);
};

export default Artist;
