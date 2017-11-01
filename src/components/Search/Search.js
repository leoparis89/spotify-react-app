import React from 'react';
import { authHttp } from '../../services/authHttp/authHttp';
import * as _ from 'underscore';
import { spotifyService } from '../../services/spotify/spotify';
import ArtistCard from '../ArtistCard/ArtistCard';

class Search extends React.Component {
  state = {
    artists: [],
    query: '',
    offset: 0
  }

  delayedCallback = _.debounce((event) => {
    const artistName = event.target.value
    this.setState(prevState => Object.assign(prevState,
      {
        query: artistName,
        artists: [],
        offset: 0
      }),
      () => this.search()
    );
  }, 1000);

  componentDidMount() {
    window.onscroll = (e) => {
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        this.increment();
      }
  };  
  }

  search() {
    spotifyService.searchArtist(this.state.query, this.state.offset).then(artists => {
      this.setState(prevState => {
        return Object.assign(prevState, { artists: prevState.artists.concat(artists) });
      })
    });
  }

  onChange = (event) => {
    event.persist();
    this.delayedCallback(event);
  }

  increment = () => {
    this.setState(prevState => {
      return Object.assign(prevState, {
        offset: prevState.offset + 20
      })
    },
      () => this.search())
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
          {this.state.artists.map((artist) => {
            console.log(artist);
            return <ArtistCard key={artist.id} artist={artist} />;
          })}
        </div>
      </div>
    );
  }
}

export default Search;