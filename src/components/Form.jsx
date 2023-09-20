import React, { useState } from "react";

const Form = ({ onSubmit, value, setValue }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        minLength={3}
        maxLength={50}
        required
        aria-label="todo input"
        name="todo input"
      />
      <button className="button">ADD</button>
    </form>
  );
};

export default Form;
