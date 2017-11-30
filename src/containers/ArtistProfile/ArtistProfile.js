import React from 'react';
import ArtistProfile from '../../components/ArtistProfile/ArtistProfile';
import { connect } from 'react-redux';
import { getAlbums } from '../../redux/actions/artistActions';


const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.artistId,
    artist: state.search.results.find((artist) => {
      return artist.id === ownProps.match.params.artistId;
    })
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAlbums: () => {
      dispatch(getAlbums(ownProps.id));
    }
  };
};

class ArtistProfileContainer extends React.Component {

  componentDidMount() {
    this.props.getAlbums();
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