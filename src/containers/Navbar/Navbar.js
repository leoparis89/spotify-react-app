import { connect } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import {logout} from '../../redux/actions/sessionActions';


const mapStateToProps = (state, ownProps) => {
  const {id} = state.profile;
  return { id };  
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { logout() {
    dispatch(logout());
  } };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
