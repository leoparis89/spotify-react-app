import React from 'react';
import {Link} from 'react-router-dom';
import gravatar from 'gravatar';

const Navbar = (props) => {
  const {id, logout, email} = props;

  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Spotify App</a>
      <ul class="nav">
        <li class="nav-item">
          <a className="nav-link" href="#"><Link to="/search">Search</Link></a>
        </li>
        <li class="nav-item">
          <a className="nav-link" href="#">{id}</a>
        </li>
        <li class="nav-item">
          {email &&  <img src={gravatar.url(email, {s: '40'})}/> }
        </li>
        <li class="nav-item">
          <a className="nav-link " href="#" onClick={logout}>logout</a>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;
