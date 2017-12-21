import Navbar from '../Navbar/Navbar';
import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


const mapStateToProps = ({session: {isLoggedIn}}) => ({isLoggedIn});


class PrivateRoute extends React.Component {
  render() {
    const {component: Component, isLoggedIn, ...rest} = this.props;
    
    return (
      <Route
        {...rest}
        render={(props) => {
          return isLoggedIn ?
            <div><Navbar /><Component {...props} /></div>
            :
            <Redirect to={{pathname: '/login', state: {from: props.location}}} />;
        }}
      />
    );
  }
}

export default connect(
  mapStateToProps
)(PrivateRoute);

PrivateRoute.propTypes = {
  component: PropTypes.func,
  isLoggedIn: PropTypes.bool
};
