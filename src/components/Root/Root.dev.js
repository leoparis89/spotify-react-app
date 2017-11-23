import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
let store = configureStore({artists: []});
import DevTools from '../../containers/DevTools';
import App from '../App/App';

class Root extends Component {
    
  render() {
    return (
      <Provider store={store}>
        <div>
          <App />
          <DevTools />
        </div>
        {/* */}
      </Provider>
    );
  }
}

export default Root;
