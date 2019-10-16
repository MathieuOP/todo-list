import React from 'react';
import PropTypes from 'prop-types';
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";
import './Todo.scss';

const Todo = ({ id, todo, checked, deleteTodo, inputCheckbox }) => {
    const handleClickDelete = (id) => (e) => {
        e.preventDefault();

        deleteTodo(id);
    };

    const handleClickTodo = (todoId) => (e) => {
        inputCheckbox(todoId);
    };

    return (
        <li key={id} className="todo">
            <div className="todo__content">
                <div className="todo__check" onClick={handleClickTodo(id)}>
                    {
                        checked ? <FaCheckCircle color="#403c60" size="1.3em" /> : <FaRegCircle color="#403c60" size="1.3em"/>
                    }
                </div>
                <div className={checked ? 'todo__text todo__text--active' : 'todo__text'}>
                    { todo }                                      
                </div>
            </div>
            <button className="todo__btn" onClick={handleClickDelete(id)}>DELETE</button>
        </li>
    )
};

Todo.propTypes = {
    id: PropTypes.string.isRequired,
    todo: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    inputCheckbox: PropTypes.func.isRequired
};

export default Todo;