import React from 'react';
import {connect} from 'react-redux';
// import {getAlbum} from '../../services/spotify/spotify';
import { getAlbum } from '../../redux/actions/albumActions';

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.albumId,
    tracks: state.album.tracks
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
    return (
      <div>bar</div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);