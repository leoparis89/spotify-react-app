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
    this.setState(prevState => {
      return Object.assign(prevState, {
        offset: prevState.offset + 20
      });
    },
    () => this.search());
  }

  render() {
    return (
      <div className="form-group text-center">
        <label>Search !</label>
        <input type="text"
          onChange={this.onChange}
          className="form-control" id="usr" />
        <button onClick={this.increment}>offset </button>
        <div className="row">
          {/* {this.props.artists.map((artist) => {
            console.log(artist);
            return <ArtistCard key={artist.id} artist={artist} />;
          })} */}
        </div>
      </div>
    );
  }
}

export default Search;

Search.propTypes = {
  search: PropTypes.func,
  artists: PropTypes.array
};
