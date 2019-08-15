import axios from 'axios';

import {
    ADD_TODO,
    DATA_TODO_LIST,
    DELETE_TODO,
    PUT_TODO,
} from './reducer';

const ajaxMiddleware = store => next => action => {
  switch (action.type) {
    case DATA_TODO_LIST: 
        return  axios.get('http://localhost:3001/')
            .then((response) => {
                
                next({
                    ...action,
                    data: response.data
                })
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    case ADD_TODO:
        return axios.post('http://localhost:3001/add', {
                todo: store.getState().inputAddTodo,
            })
            .then((response) => {
                // console.log(response.data.data);
                
                next({
                    ...action,
                    data: {
                        ...response.data.data,
                        checked: false,
                    },
                });
            }) 
            .catch((error) => {
                console.log(error);
            });
    case DELETE_TODO:

        return axios.delete(`http://localhost:3001/delete/${action.id}`)
            .then((response) => {
                // handle success
                
                const { isDelete } = response.data;
                const todoList = store.getState().todoList.filter(data => data._id !== action.id);

                if (isDelete === true) {
                    next({
                       ...action,
                       todoList,
                    })
                }
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });   
        case PUT_TODO:
            return axios.put(`http://localhost:3001/update/${action.todoId}`)
                .then((response) => {
                    // handle success

                    if (response.data.update) {
                        next({
                            ...action,
                            checked: response.data.data.checked,
                        })
                    }
                })
                .catch((error) => {
                    // handle error
                    console.log(error);
                });   
    default:
      return next(action);
  }
};

export default ajaxMiddleware;