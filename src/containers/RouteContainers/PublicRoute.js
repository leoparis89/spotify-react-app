import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


const mapStateToProps = ({session: {isLoggedIn}}) => ({isLoggedIn});


class PublicRoute extends React.Component {
  render() {
    const {component: Component, isLoggedIn, ...rest} = this.props;
    return (
      <Route
        {...rest}
        render={(props) =>
          !isLoggedIn ?
            <Component {...props} />
            :
            <Redirect to={{pathname: '/search', state: {from: props.location}}} />}
      />
    );
  }
}


export default connect(
  mapStateToProps
)(PublicRoute);

PublicRoute.propTypes = {
  component: PropTypes.func,
  isLoggedIn: PropTypes.bool
};
