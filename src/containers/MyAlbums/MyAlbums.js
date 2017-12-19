import {connect} from 'react-redux';
import {MyAlbums} from '../../components/MyAlbums/MyAlbums';


const mapStateToProps = ({profile: {savedAlbums}}) => ({savedAlbums});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAlbums);
