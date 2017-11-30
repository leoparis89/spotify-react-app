import Navbar from '../Navbar/Navbar';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


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
    const { component: Component, isloggedIn } = this.props;
    return (
      <Route
        render={(props) =>
          isloggedIn ?
            <div><Navbar /><Component {...props} /></div>
            :
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
