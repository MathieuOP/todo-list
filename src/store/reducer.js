/**
 * Initial State
 */
const initialState = {
  todoList: [],
  inputAddTodo: '',
};

/**
 * Types
 */
export const CHANGE_TODO_VALUE = 'CHANGE_TODO_VALUE';
export const ADD_TODO = 'ADD_TODO';
export const DATA_TODO_LIST = 'DATA_TODO_LIST';
export const DELETE_TODO = 'DELETE_TODO';
export const PUT_TODO = 'INPUT_CHECKBOX';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DATA_TODO_LIST:
        return {
            ...state,
            todoList: [
                ...action.data,
            ],
        }
    case CHANGE_TODO_VALUE:
      return {
        ...state,
        inputAddTodo: action.todoValue,
      };
    case ADD_TODO:
        return {
            ...state,
            todoList: [
                ...state.todoList,
                {
                    ...action.data,
                },
            ]
        }
    case DELETE_TODO:
        return {
            ...state,
            todoList: [
                ...action.todoList,
            ],
        }
    case PUT_TODO:
        return {
            ...state,
            todoList: state.todoList.map(data => {
                if (data._id === action.todoId) {
                    return {
                        ...data,
                        checked: action.checked,
                    }
                }

                return data;
            }),
        }
    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const inputAddTodo = todoValue => ({
  type: CHANGE_TODO_VALUE,
  todoValue,
});

export const addTodo = () => ({
    type: ADD_TODO,
});

export const dataTodoList = () => ({
    type: DATA_TODO_LIST,
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id,
})

export const inputCheckbox = (todoId) => ({
    type: PUT_TODO,
    todoId,
})

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;