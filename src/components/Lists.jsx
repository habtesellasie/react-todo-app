import React, { useState } from "react";
import {
  AiOutlineCheckCircle,
  AiFillCheckCircle,
  AiFillDelete,
} from "react-icons/ai";

import { FcCancel } from "react-icons/fc";
import { IoIosSave } from "react-icons/io";
import { FiEdit3 } from "react-icons/fi";

const Lists = (props) => {
  const { todoVal, id, isChecked, setChecked, removeTodo, updateTodo } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(todoVal);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    if (editedValue.trim() !== "" && editedValue.trim().length >= 3) {
      updateTodo(id, editedValue);
      setIsEditing(false);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedValue(todoVal);
  };
  return (
    <>
      <li>
        {isEditing ? (
          <form onSubmit={(e) => handleSaveClick} className="edit-container">
            <input
              type="text"
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
              autoFocus
              maxLength={35}
              minLength={3}
              required
            />
            <button
              aria-label="save edit"
              title="save edit"
              onClick={handleSaveClick}
              className="save-btn"
            >
              <IoIosSave />
            </button>

            <button
              type="button"
              aria-label="cancel edit"
              title="cancel edit"
              onClick={handleCancelClick}
              className="cancel-btn"
            >
              <FcCancel />
            </button>
          </form>
        ) : (
          <div className="content-container">
            <p className={isChecked ? "content checked" : "content"}>
              {todoVal}
            </p>
            <div className="action-btns">
              <button
                aria-label="check todo"
                title="check"
                onClick={() => setChecked(id)}
              >
                {isChecked ? (
                  <AiFillCheckCircle
                    className={isChecked ? "checked-check" : null}
                  />
                ) : (
                  <AiOutlineCheckCircle />
                )}
              </button>
              {isChecked ? null : (
                <button
                  aria-label="edit todo"
                  title="edit"
                  className="edit-btn"
                  onClick={handleEditClick}
                >
                  <FiEdit3 />
                </button>
              )}
              <button
                aria-label="delete todo"
                title="delete"
                onClick={() => removeTodo(id)}
              >
                <AiFillDelete />
              </button>
            </div>
          </div>
        )}
      </li>
    </>
  );
};

export default Lists;
