import { useState } from "react";

function ToDoItem({ children, dataId, onRemove, onEdit }) {
  const [status, setStatus] = useState(false);

  function handleChange() {
    setStatus(!status);
  }

  return (
    <div className="todoItem">
      <label className="checkbox-container">
        <input type="checkbox" onChange={handleChange} name="status" />
        <span className="checkbox-custom"></span>
        <h3 className={status ? "is-done" : ""}>{children}</h3>
        <button onClick={() => onEdit(dataId)}>Edit</button>
        <button className="remove_btn" onClick={() => onRemove(dataId)}>
          Delete
        </button>
      </label>
    </div>
  );
}

export default ToDoItem;
