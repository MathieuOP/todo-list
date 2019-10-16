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

import {
    todoListFilterDelete,
    startSliceDelete,
    endSliceDelete,
    todoListPut,
    todoListFilterPut,
    nbTodoDisplayPut,
    startSlicePut,
    endSlicePut,
    todoListFilterChangeView,
    nbTodoDisplayChangeView,
    updateStartSlice,
    updateEndSlice
} from './selectors';

const initialState = {
  todoList: [],
  todoListFilter: [],
  inputValue: '',
  displayTodoList: 'all',
  nbTodoDisplay: 0,
  startSlice: 0,
  endSlice: 3,
};

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
                inputValue: action.todoValue,
            };
        case RESET_INPUT_VALUE:
            return {
                ...state,
                inputValue: '',
            }
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
 * Export
 */
export default reducer;