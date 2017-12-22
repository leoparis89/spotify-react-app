import React from 'react';
import PropTypes from 'prop-types';
import './ArtistCard.scss';
import {Link} from 'react-router-dom';
const ArtistCard = (props) => {

  const {name, image, popularity} = props.artist;
  return (
    <div className="col-md-3">
      <Link to={'artist/' + props.artist.id}>
        <div className="card">
          <div className="square-image-container">
            {
              image ?
                <img className=""
                  src={image} alt="Card image cap" />
                :
                <i className="fa fa-music" style={{fontSize: '200px'}}></i>
            }

          </div>
          <h3 className="card-body">{name}</h3>
          <p><span className="badge badge-pill badge-primary"> Popularity: {popularity}</span></p>
        </div>
      </Link>
    </div>
  );
};

ArtistCard.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
  })
};

export default ArtistCard;
