import React from "react";

export const Todo = () => {

    const [task, settask] = useState('')
    const [list, setlist] = useState('')

  eventHandler = (event) => {
      setlist ([...list {task: task}])

  }

  return (
    <div className="Todo">
      <div>
        <h1>My To-Do List</h1>
        <input type="text" />
        <button type="submit" />
        Add
      </div>
    </div>
  );
};
