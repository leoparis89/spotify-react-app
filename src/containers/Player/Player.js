import React, {Component} from 'react';
import {initPlayer} from '../../services/player/player';

class Player extends Component {
  state = {}

  componentDidMount() {
    initPlayer();
  }

   play = () => {
   }

   render () {
     return <div>
       <button onClick={this.play}>Play</button>
       <button>Pause</button>
     </div>;
   }
}

export default Player;
