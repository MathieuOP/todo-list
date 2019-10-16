import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Todo from 'containers/Todo';
import PaginationArrow from 'components/PaginationArrow';
import './todoList.scss';

const TodoList = ({ 
    dataTodoList,
    startSlice, 
    endSlice, 
    nbTodoDisplay, 
    todoListFilter,
    updateForSlice

}) => {

    useEffect(() => {
        dataTodoList();
    }, [dataTodoList])
        
    return (
        <div className="todoList">
            <h1 className="todoList__title">My TodoList</h1>
            
            <ul className="todoList__todos">
                {
                    todoListFilter.slice(startSlice, endSlice).map(({ _id, todo, checked }) => (
                        <Todo 
                            key={_id} 
                            id={_id} 
                            todo={todo} 
                            checked={checked}
                        />
                    ))
                }
            </ul>

            <PaginationArrow 
                startSlice={startSlice}
                endSlice={endSlice}
                nbTodoDisplay={nbTodoDisplay}
                todoListFilterLength={todoListFilter.length}
                updateForSlice={updateForSlice}
            />
        </div>
    )
};

TodoList.propTypes = {
    dataTodoList: PropTypes.func.isRequired,
    startSlice: PropTypes.number.isRequired,
    endSlice: PropTypes.number.isRequired,
    todoListFilterLength: PropTypes.arrayOf(PropTypes.shape({
        checked: PropTypes.bool.isRequired,
        _id: PropTypes.string.isRequired,
        todo: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired
    })),
    updateForSlice: PropTypes.func.isRequired,
};

export default TodoList;