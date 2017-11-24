import { connect } from 'react-redux';
import { searchArtists } from '../../redux/actions';
import Search from '../../components/Search/Search';

const mapStateToProps = (state, ownProps) => {
  return {
    search: state.search
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