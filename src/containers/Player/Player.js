import React, {Component} from 'react';
import {initPlayer} from '../../services/player/player';

class Player extends Component {
  state = {}

  componentDidMount() {
    initPlayer();
  }

  render () {
    return <div>
      BAR
    </div>;
  }
}

export default Player;
