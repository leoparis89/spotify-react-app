import Navbar from '../Navbar/Navbar';
import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => {
  return {
    isloggedIn: state.session.isLoggedIn
  };  
};

const mapDispatchToProps = () => {
  return {
  };
};

class PrivateRoute extends React.Component {
  render() {
    const {component: Component, isloggedIn, ...rest} = this.props;
    
    return (
      <Route
        {...rest}
        render={(props) => {
          return isloggedIn ?
            <div><Navbar /><Component {...props} /></div>
            :
            <Redirect to={{pathname: '/login', state: {from: props.location}}} />;
        }}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);

PrivateRoute.propTypes = {
  component: PropTypes.func,
  isloggedIn: PropTypes.bool
};
