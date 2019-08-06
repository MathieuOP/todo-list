/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import TodoList from '../components/TodoList';

// Action Creators
import { dataTodoList, deleteTodo } from '../store/reducer';

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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);