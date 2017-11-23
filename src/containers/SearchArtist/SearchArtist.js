import { connect } from 'react-redux';
import { searchArtists } from '../../redux/actions';
import Search from '../../components/Search/Search';

const mapStateToProps = (state, ownProps) => {
  return {
    artists: state.artists
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    search: (artist) => {
      dispatch(searchArtists(artist));
    }
  };
};

const SearchArtist = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchArtist;