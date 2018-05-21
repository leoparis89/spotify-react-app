import React, {Component} from 'react';
import {SpotifyReady} from '../../services/player/playerClass';
//import {initPlayWithStorageToken} from '../../services/player/player';

class Player extends Component {
  state = {}

  componentDidMount() {
    //initPlayWithStorageToken();

    let foo = SpotifyReady;
    foo.then(res => {
      debugger;
    });
  }

  render () {
    return <div>
      BAR
    </div>;
  }
}

export default Player;
