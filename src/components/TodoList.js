import React from 'react';
import { FaRegCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

import './assets/style/todoList.scss';

class AddTodo extends React.Component {

    componentDidMount() {
        const { dataTodoList } = this.props;
        dataTodoList();
    }

    handleClick = (id) => (e) => {
        e.preventDefault();

        const { deleteTodo } = this.props;
        deleteTodo(id);
    }

    handleClickTodo = (todoId) => (e) => {
        const { inputCheckbox } = this.props;
        inputCheckbox(todoId);
    }

    displayTodos = (id, checked, todo) => (
        <li key={id} className="todoList-wrapperContent">
            <div className="todoList-content">
                <div className="todoList-check" onClick={this.handleClickTodo(id)}>
                    {
                        checked ? <FaCheckCircle color="#403c60" size="1.3em" /> : <FaRegCircle color="#403c60" size="1.3em"/>
                    }
                </div>
                <div className={checked ? 'todoList-text todoList-text--active' : 'todoList-text'}>
                    { todo }                                      
                </div>
            </div>
            <button className="todoList-btn" onClick={this.handleClick(id)}>DELETE</button>
        </li>
    )

    render() {
        const { todoList, displayTodoList } = this.props;
        // console.log(todoList);

        return(
            <div className="todoList">
                <h1 className="todoList-title">My TodoList</h1>
                
                <ul className="todoList-todos">
                    {
                        displayTodoList === 'all' && (
                            todoList.map(({ _id, todo, checked }) => (
                                this.displayTodos( _id, checked, todo)
                            ))
                        )
                    }

                    {/* todo active */}
                    {
                        displayTodoList === 'active' && (
                            todoList.map(({ _id, todo, checked }) => (
                                !checked && this.displayTodos( _id, checked, todo)
                                
                            ))
                        )
                    }

                    {/* todo completed */}
                    {
                        displayTodoList === 'completed' && (
                            todoList.map(({ _id, todo, checked }) => (
                                checked && this.displayTodos( _id, checked, todo)
                            ))
                        )
                    }
                </ul>
            </div>
        )
    }
};

export default AddTodo;