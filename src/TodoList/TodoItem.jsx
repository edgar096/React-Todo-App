import { useState } from 'react';
function TodoItem({ item }) {
  const [status, setStatus] = useState(item.completed);
  function handleItemStatus() {
    setStatus(!item.completed);
  }
  return (
    <div className="todo-item">
      <span className="todo-task">{item.task}</span>
      <input
        className="todo-status"
        type="checkbox"
        onChange={handleItemStatus}
      />
    </div>
  );
}

export default TodoItem;
