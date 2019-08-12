/**
 * Initial State
 */
const initialState = {
  todoList: [],
  inputAddTodo: '',
  displayTodoList: 'all',
  nbTodoDisplay: 0,
  startSlice: 0,
  endSlice: 3,
};

/**
 * Types
 */
export const CHANGE_TODO_VALUE = 'CHANGE_TODO_VALUE';
export const ADD_TODO = 'ADD_TODO';
export const DATA_TODO_LIST = 'DATA_TODO_LIST';
export const DELETE_TODO = 'DELETE_TODO';
export const PUT_TODO = 'INPUT_CHECKBOX';
export const CHANGE_VIEW = 'CHANGE_VIEW';
export const UPDATE_FOR_SLICE = 'UPDATE_FOR_SLICE';

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
            nbTodoDisplay: action.data.length,
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
    case CHANGE_VIEW:
        const nbTodoDisplay = action.content === 'all' ? state.todoList.length 
        : action.content === 'active' ? state.todoList.filter(todo => !todo.checked).length 
        : state.todoList.filter(todo => todo.checked).length;
        
        return {
            ...state,
            displayTodoList: action.content,
            nbTodoDisplay,
            startSlice: 0,
            endSlice: 3,
        }
    case UPDATE_FOR_SLICE:
        return {
            ...state,
            startSlice: action.currentButton === 'prev' ? state.startSlice - 3 : state.startSlice + 3,
            endSlice: action.currentButton === 'prev' ? state.endSlice - 3 : state.endSlice + 3,
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
})

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;