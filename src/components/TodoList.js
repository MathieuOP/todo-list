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

    render() {
        const { todoList } = this.props;
        // console.log(todoList);

        return(
            <div className="todoList">
                <h1 className="todoList-title">TodoList</h1>
                
                <ul className="todoList-todos">
                    {
                        todoList.map(({ _id, todo, checked }) => (
                            <li key={_id} className="todoList-content">
                                <div>
                                    <CheckboxTodo todoId={_id} todoCheck={checked} />
                                    <span className={checked ? 'todoList-text todoList-text--active' : 'todoList-text'}>{todo}</span>
                                </div>
                                <div>
                                    <span className="todoList-btn" onClick={this.handleClick(_id)}>x</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
};

export default AddTodo;