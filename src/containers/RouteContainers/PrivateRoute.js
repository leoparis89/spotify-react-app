import Navbar from '../Navbar/Navbar';
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

class PrivateRoute extends React.Component {
  render() {
    const {component: Component, isloggedIn, ...rest} = this.props;
    
    return (
      <Route
        {...rest}
        render={(props) => {      
          const foo = isloggedIn ?
            <div><Navbar /><Component {...props} /></div>
            :
            <Redirect to={{pathname: '/login', state: {from: props.location}}} />;
          return foo;
        }}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
