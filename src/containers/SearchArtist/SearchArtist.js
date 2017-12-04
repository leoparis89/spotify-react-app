import { connect } from 'react-redux';
import { setQuery, searchArtists } from '../../redux/actions/searchActions';
import Search from '../../components/Search/Search';

const mapStateToProps = (state, ownProps) => {
  return {
    query: state.search.query,
    results: state.search.results ,
    offset:  state.search.offset,
    loading: state.search.loading
  };  
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setQuery: (query) => {
      dispatch(setQuery(query));
    },
    searchArtists: (query, offset) => {
      dispatch(searchArtists(query, offset));
    }
  };
};

const SearchArtist = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchArtist;