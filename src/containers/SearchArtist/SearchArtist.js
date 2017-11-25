import { connect } from 'react-redux';
import { setQuery, searchArtists } from '../../redux/actions';
import Search from '../../components/Search/Search';

const mapStateToProps = (state, ownProps) => {
  return {
    query: state.search.query,
    results: state.search.results    
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setQuery: (query) => {
      dispatch(setQuery(query));
    },
    search: (query) => {
      dispatch(searchArtists(query));
    }
  };
};

const SearchArtist = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchArtist;