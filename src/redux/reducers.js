import {
    SEARCH_ARTISTS
} from './actions';
import { combineReducers } from 'redux';

function artists(state = [], action) {
    switch (action.type) {
    case SEARCH_ARTISTS:
        return state;
    default:
        return state;
    }
}

const spotifyApp = combineReducers({
    artists
    // todos
});

export default spotifyApp;