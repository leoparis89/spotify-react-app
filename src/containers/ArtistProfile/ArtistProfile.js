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

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return dispatch;
// };

const ArtistProfileContainer = connect(
  mapStateToProps,
//   mapDispatchToProps
)(ArtistProfile);

export default ArtistProfileContainer;