
import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';


const mapStateToProps = (state, ownProps) => {
  const {id} = state.profile;
  return { id };  
};

export default connect(
  mapStateToProps
)(Navbar);
