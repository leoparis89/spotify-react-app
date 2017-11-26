
import React from 'react';
import { authentication } from '../../services/authentication/authentication';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    state = {}

    logout = () => {
      authentication.logout();
    }

    render() {
      return (
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Spotify App</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li className="active">
                <Link to="/search" style={{ color: 'white' }} activeStyle={{ color: 'red' }}>Search</Link>
              </li>
              <li><a href="" onClick={this.logout}>Logout</a></li>
            </ul>
          </div>
        </nav>
      );
    }
}


export default Navbar;