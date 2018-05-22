import React, {Component} from 'react';
import {getDevices, test} from '../../services/player/playerActions';


class Player extends Component {
  state = {}

  componentDidMount() {
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
