import React from 'react';
import ArtistProfile from '../../components/ArtistProfile/ArtistProfile';
import { connect } from 'react-redux';
import {getAlbums, getArtist} from '../../redux/actions/artistActions';
import { onBottomScroll} from '../../services/utils/scroll';


const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.artistId,
    ...state.artist
    // artist: state.search.artists.find((artist) => {
    //   return artist.id === ownProps.match.params.artistId;
    // })
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAlbums: (artistId, offset) => {
      dispatch(getAlbums(artistId, offset));
    },
    getArtist: (id) => {
      dispatch(getArtist(id));
    }
  };
};

class ArtistProfileContainer extends React.Component {

  componentDidMount() {
    const {id, getAlbums, getArtist} = this.props;
    getAlbums(id, 0);
    getArtist(id);

    onBottomScroll(this.tryGetNextAlbums);
  }

  tryGetNextAlbums = () => {
    const {loading, albums, total } = this.props;
    if (!loading && (albums.length < total)) {
      this.getNextAlbums();
    }
  }

  getNextAlbums = () => {
    const {getAlbums, id, offset } = this.props;
    getAlbums(id, offset + 20);
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
