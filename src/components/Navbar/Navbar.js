import React from 'react';
import {Link} from 'react-router-dom';
import gravatar from 'gravatar';

const Navbar = (props) => {
  const {id, logout, email} = props;

  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Spotify App</a>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/search"></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><Link to="/search" style={{ color: 'white' }}>Search</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{id}</a>
        </li>
        <li className="nav-item">
          {email &&  <img src={gravatar.url(email, {s: '50'})}/> }
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#" onClick={logout}>logout</a>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;
