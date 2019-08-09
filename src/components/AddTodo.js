import React from 'react';
import { TiWarningOutline } from "react-icons/ti";

import './assets/style/addTodo.scss';

const AddTodo = ({ inputAddTodo, addTodo, inputAddTodoValue }) => {

    const handleChange = (e) => {

        let todo = e.currentTarget.value;

        if (todo.length > 50) {

            todo = todo.substring(0, 50);
        }
        
        inputAddTodo(todo);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo();

        e.currentTarget.childNodes[0].value = ''; // empty input
        inputAddTodo('');
    }


    return(
        <>
        <form onSubmit={handleSubmit} className="form"> 
            <input onChange={handleChange} className="form-input" type="text" name="todo" value={inputAddTodoValue} placeholder="Add todo..." />
        </form>

        {
            inputAddTodoValue.length === 50 && (
                <p className="message__alert"> <TiWarningOutline size="1.5em" /> You have reached 50 characters</p>
            )
        }
        </>
    )
};

export default AddTodo;