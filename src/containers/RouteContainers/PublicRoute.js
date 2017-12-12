import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


const mapStateToProps = (state, ownProps) => {
  return {
    isloggedIn: state.session.isLoggedIn
  };  
};

const mapDispatchToProps = (dispatch, ownProps) => {
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
