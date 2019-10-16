import React from 'react';
import './app.scss';

// components
import AddTodo from 'containers/AddTodo';
import TodoList from 'containers/TodoList';
import Button from 'containers/Button';

const App = () => (
  <div className="app">
    <TodoList />
    <AddTodo />

    <div className="app__buttons">
      <Button active content="ALL"/>
      <Button active={false} content="ACTIVE"/>
      <Button active={false} content="COMPLETED"/>
    </div>
  </div>
);

export default App;
