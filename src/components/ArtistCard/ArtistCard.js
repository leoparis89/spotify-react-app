import React from 'react';
import PropTypes from 'prop-types';
import './ArtistCard.scss';
import { Link } from 'react-router-dom';
const ArtistCard = (props) => {

  const {name, image } = props.artist;
  return (

    <div className="col-md-3">
      <Link to={'artist/' + props.artist.id}>
        <div className="card">
          {image ?
            <img className="card-img-top vignette"
              style={{objectFit: 'cover'}}
              src={image} alt="Card image cap" />
            :
            <div className="vignette">
              <i className="fa fa-music" style={{fontSize: '200px'}}></i>
            </div>
          }
          <div className="card-body">{name}</div>
        </div>
      </Link>
    </div>


    //   <Link to={'artist/' + props.artist.id}>
    //   <div className="col-md-3">
    //     <h3>
    //       {props.artist.name}
    //     </h3>
    //     <div className="image">
    //       <img src={props.artist.image}
    //         className="img-responsive"
    //         alt={props.artist.name} />
    //     </div>
    //   </div>
    // </Link>
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
