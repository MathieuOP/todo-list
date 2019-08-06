import React from 'react';
import './assets/style/todoList.scss';

import CheckboxTodo from '../containers/CheckboxTodo';

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

    handleContent = (id, checked, todo) => (
        <li key={id} className="todoList-content">
            <div>
                <CheckboxTodo todoId={id} todoCheck={checked} />
                <span className={checked ? 'todoList-text todoList-text--active' : 'todoList-text'}>
                    { todo }                                      
                </span>
            </div>
            <div>
                <span className="todoList-btn" onClick={this.handleClick(id)}>x</span>
            </div>
        </li>
    )

    render() {
        const { todoList, displayTodoList } = this.props;
        // console.log(todoList);

        return(
            <div className="todoList">
                <h1 className="todoList-title">TodoList</h1>
                
                <ul className="todoList-todos">
                    {
                        displayTodoList === 'all' && (
                            todoList.map(({ _id, todo, checked }) => (
                                this.handleContent( _id, checked, todo)
                            ))
                        )
                    }

                    {/* todo active */}
                    {
                        displayTodoList === 'active' && (
                            todoList.map(({ _id, todo, checked }) => (
                                !checked && this.handleContent( _id, checked, todo)
                                
                            ))
                        )
                    }

                    {/* todo completed */}
                    {
                        displayTodoList === 'completed' && (
                            todoList.map(({ _id, todo, checked }) => (
                                checked && this.handleContent( _id, checked, todo)
                            ))
                        )
                    }
                </ul>
            </div>
        )
    }
};

export default AddTodo;