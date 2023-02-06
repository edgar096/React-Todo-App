import { useState } from 'react';
import './App.css';
import TodoForm from './TodoInput/TodoForm';
import TodoItems from './TodoList/TodoItems';
import TodoFilter from './TodoInput/TodoFilter';
import TodoSort from './TodoInput/TodoSort';

//Human time (Added x minutes ago...)
//Sort Todos
//Add todos to localstorage
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
  const [todoFilteredData, setTodoFilteredData] = useState(todos);
  const [sortedData, setsortedData] = useState(todos);

  function handleAddTodo(task) {
    const newElement = {
      id: crypto.randomUUID(),
      task: task,
      completed: false,
    };
    setTodoList((prev) => [...prev, newElement]);
    setTodoFilteredData((prev) => [...prev, newElement]);
    setsortedData((prev) => [...prev, newElement]);
  }

  function handleTodoFilter(filter) {
    setTodoFilteredData(
      todoList.filter((item) => item.task.toLowerCase().includes(filter))
    );
  }

  function handleTodoSort() {
    setsortedData(
      todoList.sort((a, b) =>
        a.task.toLowerCase() > b.task.toLowerCase() ? 1 : -1
      )
    );
  }

  return (
    <>
      <h1>My List of Todos...</h1>
      <TodoFilter handleTodoFilter={handleTodoFilter} />
      <TodoForm handleAddTodo={handleAddTodo} />
      <TodoSort handleTodoSort={handleTodoSort} />
      <TodoItems data={sortedData} />
    </>
  );
}

export default App;
