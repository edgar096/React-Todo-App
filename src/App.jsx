import { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './TodoInput/TodoForm';
import TodoItems from './TodoList/TodoItems';
import TodoFilter from './TodoInput/TodoFilter';
import TodoSort from './TodoInput/TodoSort';

function App() {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  const [todoList, setTodoList] = useState(todos);
  const [todoFilteredData, setTodoFilteredData] = useState(todos);
  const [sortedData, setsortedData] = useState(todos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
    return () => {
      localStorage.removeItem('todos');
    };
  }, [todos]);
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
