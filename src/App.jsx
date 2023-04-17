import React, { useRef, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);
  const accessInputFieldRef = useRef();

  const handleAddToDo = (e) => {
    const input = accessInputFieldRef.current.value;
    if (input === '') return;
    accessInputFieldRef.current.value = null;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: input, completed: false }];
    });
  };

  return (
    <>
      <TodoList todos={todos} />
      <input ref={accessInputFieldRef} type='text' />
      <button onClick={handleAddToDo}>AddToDo</button>
      <button>ClearToDo</button>
      <p>0 tasks left</p>
    </>
  );
}

export default App;
