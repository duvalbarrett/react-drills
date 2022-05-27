import React, { useState } from "react";

export const NewTask = (props) => {
  const [input, setinput] = useState("");

  const inputHandle = (value) => {
    setinput(value);
  };

  const addHandle = () => {
    props.addTask(input);
  };

  return (
    <div>
      <input type="text" onChange={(e) => inputHandle(e.target.value)} />
      <button type="submit" onClick={() => addHandle()}>
        Add Task
      </button>
    </div>
  );
};
