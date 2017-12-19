import {connect} from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import {logout, stopKeepAlive} from '../../redux/actions/sessionActions';

const mapStateToProps = ({profile: {id, email, recentlyAddedAlbums}}) =>
  ({id, email, recentlyAddedAlbums});

const mapDispatchToProps = (dispatch) => {
  return {logout() {
    dispatch(logout());
    dispatch(stopKeepAlive());
  }};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
