import { useState } from 'react';
import './App.css';
import TodoForm from './TodoInput/TodoForm';
import TodoItems from './TodoList/TodoItems';
import TodoFilter from './TodoInput/TodoFilter';
function App() {
  let todos = [
    {
      id: 43243232,
      creationdate: '20220114',
      task: 'Do the dishes',
      completed: true,
    },
    {
      id: 43243231,
      creationdate: '20220114',
      task: 'Do the laundry',
      completed: true,
    },
    {
      id: 43243233,
      creationdate: '20220113',
      task: 'Clean the PC',
      completed: true,
    },
    {
      id: 43243238,
      creationdate: '20220112',
      task: 'Pull the plug',
      completed: false,
    },
  ];

  const [todoList, setTodoList] = useState(todos);

  function handleAddTodo(task) {
    setTodoList((prev) => [
      ...prev,
      { id: Math.random(), task: task, completed: false },
    ]);
  }

  return (
    <>
      <h1>My List of Todos...</h1>
      {/* <TodoFilter /> */}
      <TodoForm handleAddTodo={handleAddTodo} />
      <TodoItems data={todoList} />
    </>
  );
}

export default App;
