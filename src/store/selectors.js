export const todoListFilterDelete = (state, action) => (
    state.displayTodoList === 'all' ? [...action.todoList]
    : state.displayTodoList === 'active' ? action.todoList.filter(todo => !todo.checked)
    : action.todoList.filter(todo => todo.checked)
);

export const todoListFilterChangeView = (action, state) => (
    action.content === 'all' ? [...state.todoList]
    : action.content === 'active' ? state.todoList.filter(todo => !todo.checked)
    : state.todoList.filter(todo => todo.checked)
);

export const startSliceDelete = (state) => (
    ((state.todoListFilter.length - 1) % 3 === 0 && state.startSlice !== 0) ? state.startSlice - 3 : state.startSlice
);

export const endSliceDelete = (state) => (
    ((state.todoListFilter.length - 1) % 3 === 0 && state.endSlice !== 3) ? state.endSlice - 3 : state.endSlice
);

export const todoListPut = (state, action) => (
    state.todoList.map(data => {
        if (data._id === action.todoId) {
            return {
                ...data,
                checked: action.checked,
            }
        }

        return data;
    })
);

export const todoListFilterPut = (state, action) => {
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
};

export const nbTodoDisplayPut = (state) => (
    state.displayTodoList === 'all' ? state.todoList.length
    : state.displayTodoList === 'active' ? state.todoList.filter(todo => !todo.checked).length - 1
    : state.todoList.filter(todo => todo.checked).length - 1
);

export const nbTodoDisplayChangeView = (state, action) => (
    action.content === 'all' ? state.todoList.length
    : action.content === 'active' ? state.todoList.filter(todo => !todo.checked).length 
    : state.todoList.filter(todo => todo.checked).length
);

export const startSlicePut = (state) => (
    ((state.todoListFilter.length - 1) % 3 === 0  && state.startSlice !== 0 && state.displayTodoList !== 'all') 
    ? state.startSlice - 3 
    : state.startSlice
);

export const endSlicePut = (state) => (
    ((state.todoListFilter.length - 1) % 3 === 0  && state.endSlice !== 3 && state.displayTodoList !== 'all') 
    ? state.endSlice - 3 
    : state.endSlice
);

export const updateStartSlice = (state, action) => ( // click button prev or next
    action.currentButton === 'prev' ? state.startSlice - 3 : state.startSlice + 3
);

export const updateEndSlice = (state, action) => ( // click button prev or next
    action.currentButton === 'prev' ? state.endSlice - 3 : state.endSlice + 3
);