import TodoItem from './TodoItem';

function TodoItems({ data }) {
  return (
    <div>
      {data.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default TodoItems;
