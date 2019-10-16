/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import Todo from 'components/Todo';

// Action Creators
import { deleteTodo, inputCheckbox } from 'store/actions';


const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  deleteTodo: (id) => {
    dispatch(deleteTodo(id));
  },
  inputCheckbox: (todoId) => {
    dispatch(inputCheckbox(todoId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);