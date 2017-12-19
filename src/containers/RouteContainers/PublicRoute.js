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

class PublicRoute extends React.Component {
  render() {
    
    const {component: Component, isloggedIn, ...rest} = this.props;
    return (
      <Route
        {...rest}
        render={(props) =>
          !isloggedIn ?
            <Component {...props} />
            :
            <Redirect to={{pathname: '/search', state: {from: props.location}}} />}
      />
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicRoute);

PublicRoute.propTypes = {
  component: PropTypes.func,
  isloggedIn: PropTypes.bool
};
