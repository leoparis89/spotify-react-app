import React, {Component} from 'react';
//import { play } from '../../services/player/playerAction'
import player from '../../services/player/playerInstance';


class Player extends Component {
  state = {}

  componentDidMount() {
  }

   play = () => {
    console.log(player);
   }

   render () {
     return <div>
       <button onClick={this.play}>Play</button>
       <button>Pause</button>
     </div>;
   }
}

export default Player;
