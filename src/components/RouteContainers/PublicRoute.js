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

class PublicRoute extends React.Component {
  render() {
    
    // const { isloggedIn } = this.state;
    const { component: Component, isloggedIn } = this.props;
    return (
      <Route
        render={(props) =>
          !isloggedIn ?
            <Component {...props} />
            :
            <Redirect to={{ pathname: '/search', state: { from: props.location } }} />}
      />
    );
  }
}

// export default;



// function PublicRoute({ component: Component, authed, loginSuccessfull, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         !authed ?
//           <Component {...props} loginSuccessfull={loginSuccessfull} />
//           :
//           <Redirect to={{ pathname: '/search', state: { from: props.location } }} />}
//     />
//   );
// }


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicRoute);
