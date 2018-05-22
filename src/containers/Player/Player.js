import React, {Component} from 'react';
import {getDevices, test} from '../../services/player/playerActions';
import { PlayerClass } from '../../services/player/playerInstance'


class Player extends Component {
  state = {}

  componentDidMount() {
    PlayerClass.Init();
  }

   play = () => {
     getDevices();
   }

   render () {
     return <div>
       <button onClick={this.play}>Play</button>
       <button>Pause</button>
     </div>;
   }
}

export default Player;
