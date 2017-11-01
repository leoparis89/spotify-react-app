import React from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <div><Navbar /><Component {...props} /></div>
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
  }

  export default PrivateRoute;