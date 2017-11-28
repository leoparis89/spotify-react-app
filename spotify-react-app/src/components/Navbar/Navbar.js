
import React from 'react';
import { authentication } from '../../services/authentication/authentication';

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
                        <li><a href="" onClick={this.logout}>Logout</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}


export default Navbar;