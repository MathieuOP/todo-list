import React from 'react';
import './assets/style/app.scss';

// components
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';

const App = () => {
  return (
    <div className="App">
      <TodoList />
      <AddTodo />
    </div>
  );
}

export default App;
