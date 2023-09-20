import React from "react";
import {
  AiOutlineCheckCircle,
  AiFillCheckCircle,
  AiFillDelete,
} from "react-icons/ai";

const Lists = (props) => {
  const { todoVal, id, isChecked, setChecked, removeTodo } = props;
  return (
    <>
      <li>
        <p className={isChecked ? "content checked" : "content"}>{todoVal}</p>
        <div className="action-btns">
          <button onClick={() => setChecked(id)}>
            {isChecked ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
          </button>
          <button onClick={() => removeTodo(id)}>
            <AiFillDelete />
          </button>
        </div>
      </li>
    </>
  );
};

export default Lists;
