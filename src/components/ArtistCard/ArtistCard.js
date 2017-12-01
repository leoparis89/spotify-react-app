import React from 'react';
import PropTypes from 'prop-types';
import './ArtistCard.css';
import { Link } from 'react-router-dom';
const ArtistCard = (props) => {

    
  return (
    <Link to={'artist/' + props.artist.id}>
      <div className="col-md-3">
        <h3>
          {props.artist.name}
        </h3>
        <div className="image">
          <img src={props.artist.image}
            className="img-responsive"
            alt={props.artist.name} />
        </div>

      </div>
    </Link>
  );
};

ArtistCard.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
  })
};

export default ArtistCard;
