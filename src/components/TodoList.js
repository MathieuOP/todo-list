import React from 'react';
import { FaRegCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

import './style/todoList.scss';

class AddTodo extends React.Component {

    componentDidMount() {
        const { dataTodoList } = this.props;
        dataTodoList();
    }

    handleClickDelete = (id) => (e) => {
        e.preventDefault();

        const { deleteTodo } = this.props;
        deleteTodo(id);
    }

    handleClickTodo = (todoId) => (e) => {
        const { inputCheckbox } = this.props;
        inputCheckbox(todoId);
    }

    handleClickButtons = (currentButton) => () => {
        const { updateForSlice, todoListFilter, startSlice, endSlice } = this.props;

        if (currentButton === 'prev' && startSlice > 0 ) {
            updateForSlice(currentButton);
        }

        if (currentButton === 'next' && endSlice < todoListFilter.length) {
            updateForSlice(currentButton);
        }
    }

    displayTodos = (id, checked, todo) => (
        <li key={id} className="todoList__wrapperContent">
            <div className="todoList__content">
                <div className="todoList__check" onClick={this.handleClickTodo(id)}>
                    {
                        checked ? <FaCheckCircle color="#403c60" size="1.3em" /> : <FaRegCircle color="#403c60" size="1.3em"/>
                    }
                </div>
                <div className={checked ? 'todoList__text todoList__text--active' : 'todoList__text'}>
                    { todo }                                      
                </div>
            </div>
            <button className="todoList__btn" onClick={this.handleClickDelete(id)}>DELETE</button>
        </li>
    )

    render() {
        const { displayTodoList, startSlice, endSlice, nbTodoDisplay, todoListFilter } = this.props;
        
        return(
            <div className="todoList">
                <h1 className="todoList__title">My TodoList</h1>
                
                <ul className="todoList__todos">
                    {
                        displayTodoList === 'all' && (
                            todoListFilter.slice(startSlice, endSlice).map(({ _id, todo, checked }) => (
                                this.displayTodos( _id, checked, todo)
                            ))
                        )
                    }

                    {/* todo active */}
                    {
                        displayTodoList === 'active' && (
                            todoListFilter.slice(startSlice, endSlice).map(({ _id, todo, checked }) => (
                                !checked && this.displayTodos( _id, checked, todo)
                            ))
                        )
                    }

                    {/* todo completed */}
                    {
                        displayTodoList === 'completed' && (
                            todoListFilter.slice(startSlice, endSlice).map(({ _id, todo, checked }) => {
                                return checked && this.displayTodos( _id, checked, todo)
                            })
                        )
                    }
                </ul>

                <div className="todoList__buttons">
                    {
                        (startSlice > 0 && nbTodoDisplay > 0) && (
                            <button onClick={this.handleClickButtons('prev')} className="todoList__btn todoList__btn--prev">Prev</button>
                        )
                    }

                    {
                        (endSlice < nbTodoDisplay && nbTodoDisplay > 0) && (
                            <button onClick={this.handleClickButtons('next')} className="todoList__btn todoList__btn--next">Next</button>
                        )
                    }
                </div>
            </div>
        )
    }
};

export default AddTodo;