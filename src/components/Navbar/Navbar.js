import React from 'react';
import {Link} from 'react-router-dom';
import gravatar from 'gravatar';
import PropTypes from 'prop-types';
const Navbar = (props) => {
  const {id, logout, email} = props;

  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Spotify App</a>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/search">Search</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">{id}</Link>
        </li>
        <li className="nav-item">
          {email && <img src={gravatar.url(email, {s: '40'})}/> }
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#" onClick={logout}>Logout</a>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;

Navbar.propTypes = {
  id: PropTypes.string,
  logout: PropTypes.func,
  email: PropTypes.string
};
