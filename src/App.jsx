import { useState } from 'react';
import './App.css';
import { TodoList } from 'TodoItem';
import { TodoForm } from 'TodoForm';

function TodoItem({ item }) {
  const [status, setStatus] = useState(item.completed);
  function handleItemStatus(e) {
    e.preventDefault();
    setStatus(!item.completed);
  }
  return (
    <div className="todo-item">
      <span className="todo-task">{item.task}</span>
      <input
        className="todo-status"
        type="checkbox"
        checked={item.completed}
        onChange={handleItemStatus}
      />
    </div>
  );
}

function TodoList({ data }) {
  return data.map((item) => <TodoItem item={item} key={item.id} />);
}

function TodoForm({ handleAddTodo }) {
  const [task, setTask] = useState('');

  function handleNewTodo(e) {
    e.preventDefault();
    handleAddTodo(e.target.formreact.value);
  }
  function handleNewTodoTask(e) {
    setTask(e.target.value);
  }

  return (
    <form onSubmit={handleNewTodo}>
      <label>
        Task:
        <input type="text" onChange={handleNewTodoTask} name="formreact" />
      </label>
      <input type="submit" value="Add" />
    </form>
  );
}

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
      <TodoForm handleAddTodo={handleAddTodo} />
      <TodoList data={todoList} />
    </>
  );
}

export default App;
