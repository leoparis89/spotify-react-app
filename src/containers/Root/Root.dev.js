import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import DevTools from '../DevTools';
import App from '../App/App';
let store = configureStore();

const Root = () => (

  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
    {/* */}
  </Provider>
);

export default Root;
