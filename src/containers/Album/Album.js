import React from 'react';
import {connect} from 'react-redux';
// import {getAlbum} from '../../services/spotify/spotify';
import { getAlbum } from '../../redux/actions/albumActions';

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.album,
    id: ownProps.match.params.albumId,

  };
};
  
const mapDispatchToProps = (dispatch) => {
  return {
    getAlbum: (artistId) => {
      dispatch(getAlbum(artistId));
    }
  };
};

class Album extends React.Component {
  componentDidMount() {
    this.props.getAlbum(this.props.id);
  }
    
  render() {

    const {name, release_date, label, album_type, artists, image, tracks} = this.props;
    return (
      <div>bar
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={image}
                className="img-responsive"
                alt={name} />
            </div>
            <div className="col-6">
             
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);