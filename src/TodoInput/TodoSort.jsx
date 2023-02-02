function TodoSort({ handleTodoSort }) {
  return (
    <>
      <button onClick={handleTodoSort}>Sort Alphabetically</button>
    </>
  );
}

export default TodoSort;

//When button is clicked, it sorts the existing items
//so... sort the initial array (todos)
