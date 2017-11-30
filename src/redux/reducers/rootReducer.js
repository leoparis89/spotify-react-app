import { combineReducers } from 'redux';
import { search } from './searchReducer';  
import { session } from './sessionReducer';  
import { profile } from './profilReducer';

  
const rootReducer = combineReducers({
  search,
  session,
  profile
});
  
export default rootReducer;