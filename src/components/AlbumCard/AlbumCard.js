import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {pointer} from '../style/convinience';

const likeBtn = {
  paddingBottom: '8px'
};

const AlbumCard = ({album, isSaved, saveAlbum, removeAlbum}) => {
  const {name, image, album_type, id} = album;
  saveAlbum = saveAlbum && saveAlbum.bind(null, id);
  removeAlbum = removeAlbum && removeAlbum.bind(null, id);

  return (
    <div className="col-md-3">
      <div className="card">
        <Link to={'/album/' + id}>
          <div className="square-image-container">
            {image ?
              <img className=""
                style={{objectFit: 'cover'}}
                src={image} alt="Card image cap" />
              :
              <i className="fa fa-music" style={{fontSize: '200px'}}></i>
            }
          </div>
          <div className="card-block">
            <h4 className="card-title">{name}</h4>
            <h5><span className="badge badge-info">{album_type}</span></h5>
          </div>
        </Link>
        {isSaved ? <i onClick={removeAlbum} style={{...pointer, ...likeBtn}} className="fa fa-heart" aria-hidden="true"></i>
          :
          <i onClick={saveAlbum} style={{...pointer, ...likeBtn}} className="fa fa-heart-o" aria-hidden="true"></i>
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
  }),
  isSaved: PropTypes.bool,
  saveAlbum: PropTypes.func,
  removeAlbum: PropTypes.func
};

export default AlbumCard;
