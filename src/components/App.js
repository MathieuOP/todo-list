import React from 'react';
import './style/app.scss';

// components
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';
import Button from '../containers/Button';

const App = () => {
  return (
    <div className="app">
      <TodoList />
      <AddTodo />

      <div className="app__buttons">
        <Button active={true} content="ALL"/>
        <Button content="ACTIVE"/>
        <Button content="COMPLETED"/>
      </div>
    </div>
  );
}

export default App;
