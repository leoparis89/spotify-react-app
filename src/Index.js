import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';
import './styles/styles.scss';
import { AppContainer } from 'react-hot-loader';

import Root from './containers/Root/Root';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};
  
render(Root);

if (module.hot) {
  module.hot.accept('./containers/Root/Root', () => { render(Root); });
}
  