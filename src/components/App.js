import React from 'react';
import './assets/style/app.scss';

// components
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';
import Button from '../containers/Button';

const App = () => {
  return (
    <div className="App">
      <TodoList />
      <AddTodo />

      <div className="buttons">
        <Button content="All"/>
        <Button content="Active"/>
        <Button content="Completed"/>
      </div>
    </div>
  );
}

export default App;
