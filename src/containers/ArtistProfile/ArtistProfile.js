import React from 'react';
import ArtistProfile from '../../components/ArtistProfile/ArtistProfile';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.artistId,
    artist: state.search.results.find((artist) => {
      return artist.id === ownProps.match.params.artistId;
    })
  };
};

class ArtistProfileContainer extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <ArtistProfile {...this.props} />
    );
  }
}

export default connect(
  mapStateToProps,
//   mapDispatchToProps
)(ArtistProfileContainer);