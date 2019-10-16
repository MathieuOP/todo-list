import {
    CHANGE_TODO_VALUE,
    ADD_TODO,
    DATA_TODO_LIST,
    DELETE_TODO,
    PUT_TODO,
    CHANGE_VIEW,
    UPDATE_FOR_SLICE,
    RESET_INPUT_VALUE
} from './types';

export const onChange = todoValue => ({
    type: CHANGE_TODO_VALUE,
    todoValue,
  });
  
  export const resetInputValue = () => ({
    type: RESET_INPUT_VALUE
  })
  
  export const addTodo = () => ({
    type: ADD_TODO,
  });
  
  export const dataTodoList = () => ({
    type: DATA_TODO_LIST,
  });
  
  export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id,
  });
  
  export const inputCheckbox = (todoId) => ({
    type: PUT_TODO,
    todoId,
  });
  
  export const changeView = (content) => ({
    type: CHANGE_VIEW,
    content,
  });
  
  export const updateForSlice = (currentButton) => ({
    type: UPDATE_FOR_SLICE,
    currentButton,
  });