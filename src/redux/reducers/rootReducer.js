import { combineReducers } from 'redux';
import { search } from './searchReducer';  
import { session } from './sessionReducer';  

  
const rootReducer = combineReducers({
  search,
  session
});
  
export default rootReducer;