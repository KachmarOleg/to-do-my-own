import { useState } from "react";
import todoList from "./data";
import "./App.css";
import "./styles.scss";

import ToDoItem from "./components/ToDoItem";
import ToDoForm from "./components/ToDoForm";

function App() {
  const [list, setList] = useState(todoList);

  function handleAddItem(title) {
    const thebiggerID = list.length > 0 ? list.slice(-1)[0] : { id: 0 };
    setList([
      ...list,
      {
        id: thebiggerID.id + 1,
        Title: title,
        is_done: false,
      },
    ]);
  }

  function handleRemoveItem(id) {
    setList(list.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    console.log("Edit clicked for item id:", id);

    const item = list.find((item) => item.id === id);

    setList((list) =>
      list.map((item) =>
        item.id === id ? { ...item, is_edit_visible: true } : item
      )
    );

    console.log(list);
  }

  return (
    <>
      <h1>This is my first TO-DO list on React</h1>
      <ToDoForm onAdd={handleAddItem} />

      <div className="todo-items">
        {list.map((todoItem) => (
          <ToDoItem
            key={todoItem.id}
            dataId={todoItem.id}
            onRemove={handleRemoveItem}
            onEdit={handleUpdateItem}
            isEditInputVisible={todoItem.is_edit_visible}
          >
            {todoItem.Title}
          </ToDoItem>
        ))}
      </div>
    </>
  );
}

export default App;
