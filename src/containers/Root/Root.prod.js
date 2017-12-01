import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import App from '../../components/App/App';
let store = configureStore();

const Root = () => (

  <Provider store={store}>
    <div>
      <App />
    </div>
    {/* */}
  </Provider>
);

export default Root;
