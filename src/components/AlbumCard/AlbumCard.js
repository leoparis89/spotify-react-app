import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
const AlbumCard = (props) => {
  const {album, isSaved} = props;

  const {name, image, album_type, id} = album;
  const saveAlbum = props.saveAlbum.bind(null, id);

  return (
    <div className="col-md-3">
      <div className="card">
        <Link to={'/album/' + id}>
          {image ?
            <img className="card-img-top vignette"
              style={{objectFit: 'cover'}}
              src={image} alt="Card image cap" />
            :
            <div className="vignette">
              <i className="fa fa-music" style={{fontSize: '200px'}}></i>
            </div>
          }
          <div className="card-block">
            <h4 className="card-title">{name}</h4>
            <h5><span className="badge badge-info">{album_type}</span></h5>
          </div>
        </Link>
        {isSaved ? <i onClick={saveAlbum} className="fa fa-heart" aria-hidden="true"></i>
          :
          <i onClick={saveAlbum} className="fa fa-heart-o" aria-hidden="true"></i>
        }
      </div>
    </div>
  );
};

AlbumCard.propTypes = {
  album: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    album_type: PropTypes.string,
  })
};

export default AlbumCard;
