import { useState } from 'react';
import TodoItem from './TodoItem';

function TodoItems({ data }) {
  const [filter, setFilter] = useState();

  function handleNewFilter(e) {
    setFilter(e.target.value);
  }

  const filteredData = data.filter((item) =>
    item.task.toLowerCase().includes(filter)
  );
  return (
    <div>
      <input type="text" name="" id="" onChange={handleNewFilter} />
      {filteredData.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default TodoItems;

//Filtrar informação por state em vez de guardar o filtro por state
