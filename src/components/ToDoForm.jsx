function ToDoForm({ onAdd }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const toDoItem = data.get("to-do-item");
    onAdd(toDoItem);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="to-do-item"
        placeholder="I need to..."
        className="add-todo-field"
      />
      <input type="submit" className="add-btn" value="Add item" />
    </form>
  );
}

export default ToDoForm;
