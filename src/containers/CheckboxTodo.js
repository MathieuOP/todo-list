/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import CheckboxTodo from '../components/CheckboxTodo';

// Action Creators
import { inputCheckbox } from '../store/reducer';

const mapStateToProps = state => ({
  checked: state.checked,
});

const mapDispatchToProps = dispatch => ({
    inputCheckbox: (todoId) => {
    dispatch(inputCheckbox(todoId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckboxTodo);