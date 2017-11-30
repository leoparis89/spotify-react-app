import { combineReducers } from 'redux';
import { search } from './searchReducer';  
import { session } from './sessionReducer';  
import { profile } from './profilReducer';
import { artist} from './artistReducer';

  
const rootReducer = combineReducers({
  search,
  artist,
  session,
  profile
});
  
export default rootReducer;