import React from 'react';
import PropTypes from 'prop-types';
import { TiWarningOutline } from "react-icons/ti";

import './addTodo.scss';

const AddTodo = ({ 
    onChange,
    addTodo,
    resetInputValue, 
    inputValue
}) => {

    const handleChange = (e) => {
        let todo = e.currentTarget.value;

        if (todo.length > 50) todo = todo.substring(0, 50);
        
        onChange(todo);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputElement = e.currentTarget.childNodes[0];
        addTodo();

        inputElement.value = '';
        resetInputValue();
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="form"> 
                <input onChange={handleChange} className="form__input" type="text" name="todo" value={inputValue} placeholder="Add todo..." />
            </form>

            {
                inputValue.length === 50 && (
                    <p className="form__alert"> <TiWarningOutline size="1.5em" /> You have reached 50 characters</p>
                )
            }
        </>
    )
};

AddTodo.propTypes = {
    onChange: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    resetInputValue: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
}

export default AddTodo;