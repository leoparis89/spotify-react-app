import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Login from '../Login/Login';
import Proxy from '../Proxy/Proxy';
import Search from '../Search/Search';
import PrivateRoute from '../RouteContainers/PrivateRoute';
import PublicRoute from '../RouteContainers/PublicRoute';
import { authentication } from '../../services/authentication/authentication';


class App extends Component {

  state = {
      isLoggedIn: authentication.isLoggedIn()
  }

  isLoggedIn() {

  }

  updateLoginState = () => {
      this.setState((prevState) => ({
          isLoggedIn: authentication.isLoggedIn()
      }));
  }


  componentDidUpdate() {
  }

  render() {
      return (
          <Router>
              <div className="App">
                  <PublicRoute authed={this.state.isLoggedIn} path='/login' component={Login}
                      loginSuccessfull={this.updateLoginState}
                  />
                  <PublicRoute authed={this.state.isLoggedIn} path='/proxy' component={Proxy} />
                  <PrivateRoute authed={this.state.isLoggedIn} path='/search' component={Search} />
                  <PrivateRoute authed={this.state.isLoggedIn} path='/' exact component={Search} />``
              </div>
          </Router>
      );
  }
}

export default App;
