import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authed ?
          <div><Navbar /><Component {...props} /></div>
          :
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  );
}

export default PrivateRoute;