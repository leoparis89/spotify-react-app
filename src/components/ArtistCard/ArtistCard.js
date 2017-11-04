import React from 'react';
import PropTypes from 'prop-types';
import './ArtistCard.css';

const ArtistCard = (props) => {

    return (
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
    );
};

ArtistCard.propTypes = {
    artist: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string,
    })
};

export default ArtistCard;
