import React, {Fragment} from 'react';
import './assets/style/addTodo.scss';

const AddTodo = ({ inputAddTodo, addTodo, inputAddTodoValue}) => {

    const handleChange = (e) => {
        inputAddTodo(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo();

        e.currentTarget.childNodes[0].value = ''; // empty input
    }


    return(
        <Fragment>
            <form onSubmit={handleSubmit} className="form"> 
                <input onChange={handleChange} className="form-input" type="text" name="todo" value={inputAddTodoValue} placeholder="Entrez votre todo ..." />
            </form>
        </Fragment>
    )
};

export default AddTodo;