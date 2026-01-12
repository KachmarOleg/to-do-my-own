import { useState } from "react";

function ToDoItem({
  children,
  dataId,
  onRemove,
  onEdit,
  onUpdate,
  isEditInputVisible,
}) {
  const [status, setStatus] = useState(false);
  const [editValue, setEditValue] = useState(children);

  function handleChange() {
    setStatus(!status);
  }

  function handleInputChange(e) {
    setEditValue(e.target.value);
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
          onChange={handleInputChange}
          value={editValue}
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
          onClick={() => onUpdate(dataId, editValue)}
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
