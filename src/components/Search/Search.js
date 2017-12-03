import React from 'react';
import * as _ from 'underscore';
import ArtistCard from '../ArtistCard/ArtistCard';
import PropTypes from 'prop-types';
import { onBottomScroll} from'../../services/utils/scroll';

class Search extends React.Component {
  state = {
    offset: 0
  }

  delayedCallback = _.debounce((event) => {
    const artistName = event.target.value;
    this.props.setQuery(artistName);
    this.props.searchArtists(artistName);
  }, 1000);

  componentDidMount() {
    onBottomScroll(this.increment);
  }

  onChange = (event) => {
    event.persist();
    this.delayedCallback(event);
  }

  increment = () => {
    const {searchArtists, query, offset, loading } = this.props;
    
    if (!loading) {
      searchArtists(query, offset);
    }
  }

  render() {
    return (
      <div className="form-group text-center">
        <label>Search !</label>
        <h1>{this.props.query}</h1>
        <h2>{this.props.offset}</h2>
        <input type="text"
          onChange={this.onChange}
          className="form-control" id="usr" />
        <div className="row">
          {this.props.results.map((artist) => {
            console.log(artist.name, artist.id);
            return <ArtistCard key={artist.id} artist={artist} />;
          })}
        </div>
      </div>
    );
  }
}

export default Search;

Search.propTypes = {
  setQuery
  : PropTypes.func,
  searchArtists: PropTypes.func,
  results: PropTypes.array,
  query: PropTypes.string,
  offset: PropTypes.number,
  loading: PropTypes.bool
};
