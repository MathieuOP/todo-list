/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import TodoList from 'components/TodoList';

// Action Creators
import { dataTodoList, deleteTodo, inputCheckbox, updateForSlice } from 'store/actions';


const mapStateToProps = state => ({
  todoListFilter: state.todoListFilter,
  displayTodoList: state.displayTodoList,
  startSlice: state.startSlice,
  endSlice: state.endSlice,
  nbTodoDisplay: state.nbTodoDisplay,
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
  updateForSlice: (currentButton) => {
    dispatch(updateForSlice(currentButton));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);