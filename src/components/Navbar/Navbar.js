
import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
  const {id} = state.profile;
  return { id };  
};

const Navbar = (props) => {
  const {id} = props;
  return (
    <nav className="navbar navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Spotify App</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li className="active">
            <Link to="/search" style={{ color: 'white' }}>Search</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li className="active"><a href="#">{id}</a></li>
          <li><a href="#"><span className="glyphicon glyphicon-user"></span></a></li>  
          <li><a href=""
            onClick={this.logout}
          ><span className="glyphicon glyphicon-off"
            ></span></a></li>
        </ul>
      </div>
    </nav>
  );
};


export default connect(
  mapStateToProps
)(Navbar);
