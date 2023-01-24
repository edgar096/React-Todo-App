import { useState } from 'react';

function TodoFilter({ handleTodoFilter }) {
  const [filter, setFilter] = useState(null);
  function handleNewFilter(e) {
    handleTodoFilter(e.target.value);
  }
  function handleFilter(e) {
    setFilter(e.target.value);
  }
  return (
    <div>
      <label htmlFor="label">Filter by...</label>
      <input type="text" name="" id="" onChange={handleNewFilter} />
    </div>
  );
}
export default TodoFilter;
