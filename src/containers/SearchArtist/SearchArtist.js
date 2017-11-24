import { connect } from 'react-redux';
import {  setQuery } from '../../redux/actions';
import Search from '../../components/Search/Search';

const mapStateToProps = (state, ownProps) => {
  return {
    search: state.search
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setQuery: (query) => {
      dispatch(setQuery(query));
    }
  };
};

const SearchArtist = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchArtist;