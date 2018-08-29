import { connect } from 'react-redux';
import { getStatus } from '../../actions/index';
import StatusView from '../../components/StatusView';

const mapDispatchToProps = dispatch => ({

  getStatus: () => {
    dispatch(getStatus());
  },
});

export default connect(null, mapDispatchToProps)(StatusView);

