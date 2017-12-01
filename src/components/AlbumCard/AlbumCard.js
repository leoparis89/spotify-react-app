import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const AlbumCard = (props) => {

    
  return (
    <Link to={'album/' + props.album.id}>
      <div className="col-md-3">
        <h3>
          {props.album.name}
        </h3>
        <div className="image">
          <img src={props.album.image}
            className="img-responsive center-block"
            alt={props.album.name} />
        </div>
      </div>
    </Link>
  );
};

AlbumCard.propTypes = {
  album: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
  })
};

export default AlbumCard;
