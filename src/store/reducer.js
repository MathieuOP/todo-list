/**
 * Initial State
 */
const initialState = {
  todoList: [],
  todoListFilter: [],
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
                todoList: [ ...action.data],
                todoListFilter: [...action.data],
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
                todoList: [{...action.data}, ...state.todoList],
                todoListFilter: [{...action.data}, ...state.todoListFilter],
                nbTodoDisplay: state.todoList.length + 1,
            }
        case DELETE_TODO:
            return {
                ...state,
                todoList: [...action.todoList],
                todoListFilter: todoListFilterDelete(state, action),
                nbTodoDisplay: state.todoListFilter.length - 1,
                startSlice: startSliceDelete(state),
                endSlice: endSliceDelete(state),
            }
        case PUT_TODO:
            return {
                ...state,
                todoList: todoListPut(state, action),
                todoListFilter: todoListFilterPut(state, action),
                nbTodoDisplay: nbTodoDisplayPut(state),
                startSlice: startSlicePut(state),
                endSlice: endSlicePut(state),
            }
        case CHANGE_VIEW: 
            return {
                ...state,
                displayTodoList: action.content,
                todoListFilter: todoListFilterChangeView(action, state),
                nbTodoDisplay: nbTodoDisplayChangeView(state, action),    
                startSlice: 0,
                endSlice: 3,
            }
        case UPDATE_FOR_SLICE:
            return {
                ...state,
                startSlice: updateStartSlice(state, action),
                endSlice: updateEndSlice(state, action),
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

const todoListFilterDelete = (state, action) => (
    state.displayTodoList === 'all' ? [...action.todoList]
    : state.displayTodoList === 'active' ? action.todoList.filter(todo => !todo.checked)
    : action.todoList.filter(todo => todo.checked)
);

const todoListFilterChangeView = (action, state) => (
    action.content === 'all' ? [...state.todoList]
    : action.content === 'active' ? state.todoList.filter(todo => !todo.checked)
    : state.todoList.filter(todo => todo.checked)
)

const startSliceDelete = (state) => (
    ((state.todoListFilter.length - 1) % 3 === 0 && state.startSlice !== 0) ? state.startSlice - 3 : state.startSlice
)

const endSliceDelete = (state) => (
    ((state.todoListFilter.length - 1) % 3 === 0 && state.endSlice !== 3) ? state.endSlice - 3 : state.endSlice
)

const todoListPut = (state, action) => (
    state.todoList.map(data => {
        if (data._id === action.todoId) {
            return {
                ...data,
                checked: action.checked,
            }
        }

        return data;
    })
)

const todoListFilterPut = (state, action) => {
    const dataTodo = state.todoListFilter.map(data => {
        if (data._id === action.todoId) {
            return {
                ...data,
                checked: action.checked,
            }
        }

        return data;
    })

    return state.displayTodoList === 'all' ? dataTodo : dataTodo.filter(todo => todo.checked === !action.checked)
}

const nbTodoDisplayPut = (state) => (
    state.displayTodoList === 'all' ? state.todoList.length
    : state.displayTodoList === 'active' ? state.todoList.filter(todo => !todo.checked).length - 1
    : state.todoList.filter(todo => todo.checked).length - 1
)

const nbTodoDisplayChangeView = (state, action) => (
    action.content === 'all' ? state.todoList.length
    : action.content === 'active' ? state.todoList.filter(todo => !todo.checked).length 
    : state.todoList.filter(todo => todo.checked).length
)

const startSlicePut = (state) => (
    ((state.todoListFilter.length - 1) % 3 === 0  && state.startSlice !== 0 && state.displayTodoList !== 'all') 
    ? state.startSlice - 3 
    : state.startSlice
)

const endSlicePut = (state) => (
    ((state.todoListFilter.length - 1) % 3 === 0  && state.endSlice !== 3 && state.displayTodoList !== 'all') 
    ? state.endSlice - 3 
    : state.endSlice
)

const updateStartSlice = (state, action) => ( // click button prev or next
    action.currentButton === 'prev' ? state.startSlice - 3 : state.startSlice + 3
)

const updateEndSlice = (state, action) => ( // click button prev or next
    action.currentButton === 'prev' ? state.endSlice - 3 : state.endSlice + 3
)
 
/**
 * Export
 */
export default reducer;