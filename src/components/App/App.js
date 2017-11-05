import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Login from '../Login/Login';
import Proxy from '../Proxy/Proxy';
import Search from '../Search/Search';
import PrivateRoute from '../RouteContainers/PrivateRoute';
import PublicRoute from '../RouteContainers/PublicRoute';
import { authentication } from '../../services/authentication/authentication';
import ArtistProfileContainer from '../ArtistProfile/ArtistProfileContainer';

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
        const { isLoggedIn } = this.state;
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <PublicRoute authed={isLoggedIn} path='/login' component={Login}
                            loginSuccessfull={this.updateLoginState}
                        />
                        <PublicRoute authed={isLoggedIn} path='/proxy' component={Proxy} />
                        <PrivateRoute authed={isLoggedIn} path='/search' component={Search} />
                        <PrivateRoute authed={isLoggedIn} path='/artist/:artistId' component={ArtistProfileContainer} />
                        <Redirect to='/search' />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
