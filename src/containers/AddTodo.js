/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import AddTodo from '../components/AddTodo';

// Action Creators
import { inputAddTodo, addTodo } from '../store/reducer';

const mapStateToProps = state => ({
  inputAddTodoValue: state.inputAddTodo,
});

const mapDispatchToProps = dispatch => ({
  inputAddTodo: (todoValue) => {
    dispatch(inputAddTodo(todoValue));
  },
  addTodo: () => {
    dispatch(addTodo());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);