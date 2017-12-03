import React from 'react';
import ArtistProfile from '../../components/ArtistProfile/ArtistProfile';
import { connect } from 'react-redux';
import { getAlbums } from '../../redux/actions/artistActions';


const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.artistId,
    ...state.artist,
    artist: state.search.results.find((artist) => {
      return artist.id === ownProps.match.params.artistId;
    })
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAlbums: (artistId) => {
      dispatch(getAlbums(artistId));
    }
  };
};

class ArtistProfileContainer extends React.Component {

  componentDidMount() {
    this.props.getAlbums(this.props.id);
  }

  render() {
    return (
      <ArtistProfile {...this.props} />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistProfileContainer);