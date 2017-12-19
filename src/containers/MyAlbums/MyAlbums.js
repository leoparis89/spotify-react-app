import {connect} from 'react-redux';
import {MyAlbums} from '../../components/MyAlbums/MyAlbums';
import {removeAlbum} from '../../redux/actions/artistActions';


const mapStateToProps = ({profile: {savedAlbums}}) => ({savedAlbums});

const mapDispatchToProps = (dispatch) => {
  return {removeAlbum(id) {
    dispatch(removeAlbum(id));
  }};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAlbums);
