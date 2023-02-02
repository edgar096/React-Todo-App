import { useState } from 'react';
function TodoForm({ handleAddTodo }) {
  const [task, setTask] = useState('');

  function handleNewTodo(e) {
    e.preventDefault();
    e.target.reactform.value != '' && handleAddTodo(e.target.reactform.value);
  }

  function handleNewTodoTask(e) {
    setTask(e.target.value);
  }

  return (
    <form onSubmit={handleNewTodo}>
      <label>
        Task:
        <input type="text" onChange={handleNewTodoTask} name="reactform" />
      </label>
      <input type="submit" value="Add" />
    </form>
  );
}

export default TodoForm;
