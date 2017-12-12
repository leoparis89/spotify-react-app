import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import Login from '../../containers/Login/Login';
import Proxy from '../../components/Proxy/Proxy';
import SearchArtist from '../../containers/SearchArtist/SearchArtist'; 
import PrivateRoute from '../../containers/RouteContainers/PrivateRoute';
import PublicRoute from '../../containers/RouteContainers/PublicRoute';
import ArtistProfile from '../../containers/ArtistProfile/ArtistProfile';
import Album from '../../containers/Album/Album';
import {connect} from 'react-redux';
import {isLoggedIn} from '../../services/authentication/authentication';
import {getProfile} from '../../redux/actions/profileActions';
import {startLogoutTimer} from '../../redux/actions/sessionActions';

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: () => {
      dispatch(getProfile());
    },
    startLogoutTimer: () => {
      dispatch(startLogoutTimer());
    }
  };
};


class App extends Component {
  componentDidMount() {
    if (isLoggedIn()) {
      this.props.startLogoutTimer();
      this.props.getProfile();
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <PublicRoute path='/login' component={Login}
            />
            <PublicRoute path='/proxy' component={Proxy} />
            <PrivateRoute path='/search' component={SearchArtist} />
            <PrivateRoute path='/artist/:artistId' component={ArtistProfile} />
            <PrivateRoute path='/album/:albumId' component={Album} />
            <Redirect to='/search' />
          </Switch>
        </div>                
      </Router>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
