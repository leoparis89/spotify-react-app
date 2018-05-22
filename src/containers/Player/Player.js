import React, {Component} from 'react';
import {getDevices, play} from '../../services/player/playerActions';
import { PlayerClass } from '../../services/player/playerInstance'


class Player extends Component {
  state = {}

  componentDidMount() {
    PlayerClass.Init();
  }

   play = () => {
     // getDevices();
     play();
   }

   render () {
     return <div>
       <button onClick={this.play}>Play</button>
       <button>Pause</button>
     </div>;
   }
}

export default Player;
