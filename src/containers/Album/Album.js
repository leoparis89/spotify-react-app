import React from 'react';
import {connect} from 'react-redux';
import { getAlbum } from '../../redux/actions/albumActions';
import Album from '../../components/Album/Album';
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

class AlbumContainer extends React.Component {
  componentDidMount() {
    this.props.getAlbum(this.props.id);
  }
    
  render() {
    return (
      <Album {...this.props}/>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumContainer);