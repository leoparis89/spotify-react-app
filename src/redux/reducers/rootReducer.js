import { combineReducers } from 'redux';
import { search } from './searchReducer';  
import { session } from './sessionReducer';  
import { profile } from './profilReducer';
import { artist } from './artistReducer';
import { album } from './albumReducer';
  
const rootReducer = combineReducers({
  search,
  artist,
  session,
  profile,
  album
});
  
export default rootReducer;
