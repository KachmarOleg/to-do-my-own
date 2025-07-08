import { useState } from "react";

function ToDoItem({ children, dataId, onRemove, onEdit, isEditInputVisible }) {
  const [status, setStatus] = useState(false);

  function handleChange() {
    setStatus(!status);
  }

  return (
    <div className="todoItem">
      <label className="checkbox-container">
        <input type="checkbox" onChange={handleChange} name="status" />
        <span className="checkbox-custom"></span>
        <h3
          className={`
            ${status ? "is-done" : ""} 
            ${isEditInputVisible ? "is-hidden" : "is-visible"}`}
        >
          {children}
        </h3>
        <input
          type="text"
          name="edit-item"
          className={`edit-field ${isEditInputVisible ? "" : "is-hidden"}`}
          placeholder="Update the title"
        />
        {isEditInputVisible}
        <button
          className={`${
            isEditInputVisible ? "is-hidden" : "is-visible"
          } edit_btn`}
          onClick={() => onEdit(dataId, isEditInputVisible)}
        >
          Edit
        </button>
        <button
          className={`update_btn ${
            isEditInputVisible ? "is-visible" : "is-hidden"
          }`}
        >
          Update
        </button>
        <button className="remove_btn" onClick={() => onRemove(dataId)}>
          Delete
        </button>
      </label>
    </div>
  );
}

export default ToDoItem;
