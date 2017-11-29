import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PublicRoute({ component: Component, authed, loginSuccessfull, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        !authed ?
          <Component {...props} loginSuccessfull={loginSuccessfull} />
          :
          <Redirect to={{ pathname: '/search', state: { from: props.location } }} />}
    />
  );
}

export default PublicRoute;