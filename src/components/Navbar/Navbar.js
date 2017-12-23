import React from 'react';
import {Link} from 'react-router-dom';
import gravatar from 'gravatar';
import PropTypes from 'prop-types';
const Navbar = ({id, logout, email, recentlyAddedAlbums}) => {
  return (
    <nav className="navbar  navbar-expand-md navbar-dark bg-dark">
      <button className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#myNav"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">Spotify App</a>
      <div className="collapse navbar-collapse justify-content-end" id="myNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/search">Search</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/my-albums">My Albums
              {recentlyAddedAlbums ?
                <span className="badge badge-danger" style={{marginLeft: '1em'}}>{recentlyAddedAlbums}</span>
                : ''}
            </Link>
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
      </div>
    </nav>
  );
};


export default Navbar;

Navbar.propTypes = {
  id: PropTypes.string,
  logout: PropTypes.func,
  email: PropTypes.string,
  recentlyAddedAlbums: PropTypes.number
};
