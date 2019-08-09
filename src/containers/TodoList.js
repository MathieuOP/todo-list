/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import TodoList from '../components/TodoList';

// Action Creators
import { dataTodoList, deleteTodo, inputCheckbox } from '../store/reducer';

const mapStateToProps = state => ({
  todoList: state.todoList,
  displayTodoList: state.displayTodoList,
});

const mapDispatchToProps = dispatch => ({
  dataTodoList: () => {
    dispatch(dataTodoList());
  },
  deleteTodo: (id) => {
    dispatch(deleteTodo(id));
  },
  inputCheckbox: (todoId) => {
    dispatch(inputCheckbox(todoId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);