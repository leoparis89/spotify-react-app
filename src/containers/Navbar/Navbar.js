import {connect} from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import {logout, stopKeepAlive} from '../../redux/actions/sessionActions';


const mapStateToProps = (state, ownProps) => {
  const {id, email} = state.profile;
  return {id, email};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {logout() {
    dispatch(logout());
    dispatch(stopKeepAlive());
  }};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
