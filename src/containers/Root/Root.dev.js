import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
let store = configureStore({artists: []});
import DevTools from '../DevTools';
import App from '../../components/App/App';
// ;


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
