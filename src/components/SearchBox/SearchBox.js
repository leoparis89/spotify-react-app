import React from 'react';
import PropTypes from 'prop-types';

class SearchBox extends React.Component {
    searchArtist = (e) => {
      this.props.searchArtist(e.target.value);
    }

    render() {
      return (
        <input onChange={this.searchArtist}></input>
      );
    }
}

export default SearchBox;

SearchBox.propTypes = {
  searchArtist: PropTypes.func
};
