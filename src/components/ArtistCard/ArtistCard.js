import React from 'react';
import PropTypes from 'prop-types';

const ArtistCard = (props) => {

    return (
        <div className="col-md-3">
            <h3>
                {props.artist.name}
            </h3>
            <img src={props.artist.image}
                className="img-responsive"
                alt={props.artist.name} />
            <div>
                {props.artist.genres.map(genre => {
                    return <span className="badge">{genre}</span>;
                })}
            </div>

        </div>
    );
};

ArtistCard.propTypes = {
    artist: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string,
        genres: PropTypes.array
    })
};

export default ArtistCard;
