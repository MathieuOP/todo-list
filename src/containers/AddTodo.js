/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import AddTodo from 'components/AddTodo';

// Action Creators
import { onChange, addTodo, resetInputValue } from 'store/actions';

const mapStateToProps = state => ({
  inputValue: state.inputValue,
});

const mapDispatchToProps = dispatch => ({
  onChange: (todoValue) => {
    dispatch(onChange(todoValue));
  },
  resetInputValue: () => {
    dispatch(resetInputValue());
  },
  addTodo: () => {
    dispatch(addTodo());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);