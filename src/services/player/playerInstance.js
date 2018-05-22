import {configPlayer, createPlayer} from './funcs/player';
import {storage} from '../storage/storage';

export class PlayerClass {
  static Init () {
    const token = storage.getToken();
    createPlayer(token).then(player => {
      PlayerClass.instance = player;
      configPlayer(PlayerClass.instance);
      console.log(PlayerClass.instance._options.id);
    });
  }
}
