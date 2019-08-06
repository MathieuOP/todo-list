/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import Button from '../components/Button';

// Action Creators
import { changeView } from '../store/reducer';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  changeView: (content) => {
    dispatch(changeView(content));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);