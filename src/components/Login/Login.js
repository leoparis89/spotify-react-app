import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


const Login = (props) => {
  const {login} = props;
  return (
    <div>
      <button className="btn btn-info" onClick={login}>
                Log in Spotify
      </button>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func
};

export default withRouter(Login);