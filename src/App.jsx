import { useState, useId } from "react";
import viteLogo from "/vite.svg";
import todoList from "./data";
import "./App.css";
import "./styles.scss";

// Що ще треба?
//
// 1. Редагувати текст
// 2. Підпункти (і вони іншим шрифтом, або не жирні хоча б)
// 3. Колір міняти при редагуванні
// 4. Drag and Drop пересувати айтеми
// 5. Стилі підправити

function App() {
  const [list, setList] = useState(todoList);

  function ToDoItem({ children, dataId }) {
    const [status, setStatus] = useState(false);

    function handleChange() {
      setStatus(!status);
    }

    return (
      <>
        <div className="todoItem">
          <label className="checkbox-container">
            <input type="checkbox" onChange={handleChange} name="status" />
            <span className="checkbox-custom"></span>
            <h3 className={status ? "is-done" : ""}>{children}</h3>
            <button
              className="remove_btn"
              onClick={handleRemoveToDo}
              data-id={dataId}
            >
              Delete
            </button>
          </label>
        </div>
      </>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const toDoItem = data.get("to-do-item");

    const thebiggerID = list.length > 0 ? list.slice(-1)[0] : 0;

    setList([
      ...list,
      {
        id: thebiggerID.id + 1,
        Title: toDoItem,
        is_done: true,
      },
    ]);

    return;
  }

  function handleRemoveToDo(event) {
    const toDoItemId = Number(event.target.dataset.id);

    setList(list.filter((item) => item.id !== toDoItemId));
  }

  return (
    <>
      <h1>This is my first TO-DO list on React</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="to-do-item"
          placeholder="I need to..."
          className="add-todo-field"
        />

        <input type="submit" className="add-btn" value="Add item" />
      </form>

      <div className="todo-items">
        {list.map((todoItem) => (
          <ToDoItem key={todoItem.id} dataId={todoItem.id}>
            {todoItem.Title}
          </ToDoItem>
        ))}
      </div>
    </>
  );
}

export default App;
