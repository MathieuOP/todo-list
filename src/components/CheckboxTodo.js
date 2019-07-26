import React from 'react';
import './assets/style/checkboxTodo.scss';

const CheckboxTodo = ({inputCheckbox, todoId, todoCheck }) => {

    const handleChange = (todoId) => (e) => {
        console.log(todoId);

        inputCheckbox(todoId);
    }
    
    return (
        <input onChange={handleChange(todoId)} checked={todoCheck} type="checkbox" name="checkbox"/>
    );
};

export default CheckboxTodo;