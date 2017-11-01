import React from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';

function PublicRoute({ component: Component, authed,loginSuccessfull, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} loginSuccessfull={loginSuccessfull} />
        : <Redirect to={{ pathname: '/search', state: { from: props.location } }} />}
    />
  )
}

export default PublicRoute;