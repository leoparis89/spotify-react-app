import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Login from '../../containers/Login/Login';
import Proxy from '../Proxy/Proxy';
import SearchArtist from '../../containers/SearchArtist/SearchArtist'; 
import PrivateRoute from '../RouteContainers/PrivateRoute';
import PublicRoute from '../RouteContainers/PublicRoute';
import { authentication } from '../../services/authentication/authentication';
import ArtistProfile from '../../containers/ArtistProfile/ArtistProfile';
import Album from '../../containers/Album/Album';

class App extends Component {

    state = {
      isLoggedIn: authentication.isLoggedIn()
    }

    isLoggedIn() {

    }

    updateLoginState = () => {
      this.setState(() => ({
        isLoggedIn: authentication.isLoggedIn()
      }));
    }


    componentDidUpdate() {
    }

    render() {
      return (
        <Router>
          <div className="App">
            <Switch>
              <PublicRoute  path='/login' component={Login}
                loginSuccessfull={this.updateLoginState}
              />
              <PublicRoute  path='/proxy' component={Proxy} />
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

export default App;
