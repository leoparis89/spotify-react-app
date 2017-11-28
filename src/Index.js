import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
// import Root from './components/Root/Root';

// ReactDOM.render(<Root />, document.getElementById('root'));
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
  