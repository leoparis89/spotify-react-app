// import React from 'react';
import {connect} from 'react-redux';
import Login from '../../components/Login/Login';
import {login} from '../../redux/actions/sessionActions';
// import { setQuery, login } from '../../redux/actions';


const mapStateToProps = (state) => {
  return {
  };  
};
  
const mapDispatchToProps = (dispatch) => {
  return {
    login: () => {
      dispatch(login());
      // dispatch(startKeepAlive());
    }
  };
};
  


export default connect(mapStateToProps, mapDispatchToProps)(Login);
