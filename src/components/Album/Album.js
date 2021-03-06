import React from 'react';
import PropTypes from 'prop-types';

const Artist = (props) => {

  const {id, name, release_date, label, album_type, artists, image, tracks} = props;
  const url = `https://open.spotify.com/embed?uri=spotify%3Aalbum%3A${id}`;

  return (
    <div>
      <div className="container">
        <div className="row" style={{marginTop: '40px'}}>
          <div className="col-md-6">
            <img src={image}
              className="img-fluid" style={{width:'50%'}}
              alt={name} />
            <h3>{name}  </h3>
            <h4><span className="badge badge-pill badge-primary">{label}</span></h4>
          </div>
          <div className="col-md-6">
            <div>
              <iframe src={url} width="100%" height="500px" frameBorder="0" allowTransparency="true"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>);
};

export default Artist;

Artist.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  release_date: PropTypes.string,
  label: PropTypes.string,
  album_type: PropTypes.string,
  artists: PropTypes.array,
  image: PropTypes.string,
  tracks: PropTypes.array
};
