import { connect } from 'react-redux';
import { setQuery, searchArtists } from '../../redux/actions/searchActions';
import Search from '../../components/Search/Search';

const mapStateToProps = (state, ownProps) => {
  const {query, artists, offset, total, loading} = state.search;

  return {
    query,
    artists ,
    offset,
    total,
    loading
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
