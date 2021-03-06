import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import DevTools from '../containers/DevTools';
import thunk from 'redux-thunk';

const enhancer = compose(
  applyMiddleware(thunk),
  // Middleware you want to use in development:
  // applyMiddleware(d1, d2, d3),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
);

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/reactjs/redux/releases/tag/v3.1.0
  const store = createStore(rootReducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./reducers/rootReducer.js', () =>
      store.replaceReducer(require('./reducers/rootReducer.js')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}
