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
    const { total } = this.props;
    return (
      <div>
        <div className='row'>
          <h1 className='col-md-12'>Search!</h1>
          <div className="input-group input-group-lg col-md-4 offset-md-4">
            <input onChange={this.onChange} type="text" className="form-control" placeholder="Artist name..." aria-describedby="sizing-addon1"/>
          </div>
        </div>
        <h1>{total}</h1>
        <div className="row" >
          {this.props.results.map((artist) => {
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
