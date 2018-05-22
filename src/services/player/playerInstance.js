import {configPlayer, createPlayer} from './funcs/player';
import {storage} from '../storage/storage';

class Player {
  constructor () {
    const token = storage.getToken();
    createPlayer(token).then(player => {
      this.instance = player;
      configPlayer(this.instance);
    });
  }
}

export default new Player();
