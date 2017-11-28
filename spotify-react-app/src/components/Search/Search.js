import React from 'react';
import { authHttp } from '../../services/authHttp/authHttp';
import * as _ from 'underscore';
import { spotifyService } from '../../services/spotify/spotify';
import ArtistCard from '../ArtistCard/ArtistCard';

class Search extends React.Component {
  state = {
    artists: []
  }

  delayedCallback = _.debounce((event) => {
    this.handleSearch(event.target.value);
  }, 1000);

  handleSearch(artistName) {
    spotifyService.searchArtist(artistName).then(artists => {
      this.setState(prevState => {
        return Object.assign(prevState, { artists });
      })
    });
  }

  onChange = (event) => {
    event.persist();
    this.delayedCallback(event);
  }

  render() {
    return (
      <div className="form-group text-center">
        <label>Search !</label>
        <input type="text"
          onChange={this.onChange}
          className="form-control" id="usr" />
        <div className="row">
          {this.state.artists.map((artist) => {
            console.log(artist);
            return <ArtistCard key={artist.id} artist={artist}/>;
          })}
        </div>
      </div>
    );
  }
}

export default Search;