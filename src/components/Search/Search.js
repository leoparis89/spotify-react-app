import React from 'react';
import * as _ from 'underscore';
import ArtistCard from '../ArtistCard/ArtistCard';
import PropTypes from 'prop-types';

class Search extends React.Component {
  state = {
    offset: 0
  }

  delayedCallback = _.debounce((event) => {
    const artistName = event.target.value;
    this.props.setQuery(artistName);
    this.props.search(artistName);
  }, 1000);

  componentDidMount() {
    window.onscroll = (e) => {
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        this.increment();
      }
    };
  }

  onChange = (event) => {
    event.persist();
    this.delayedCallback(event);
  }

  increment = () => {
    const {search, query, offset} = this.props;
    search(query, offset);
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
        <button onClick={this.increment}>offset </button>
        <div className="row">
          {this.props.results.map((artist) => {
            console.log(artist.id);
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
  search: PropTypes.func,     
  results: PropTypes.array,
  query: PropTypes.string,
  offset: PropTypes.number
};
