// import React from 'react';
import { connect } from 'react-redux';
import Login from '../../components/Login/Login';

const mapStateToProps = (state, ownProps) => {
  return {

  };  
};
  
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (query) => {
      debugger;
    //   dispatch(setQuery(query));
    },
    search: (query, offset) => {
    //   dispatch(searchArtists(query, offset));
    }
  };
};
  


export default connect(mapStateToProps, mapDispatchToProps)(Login);