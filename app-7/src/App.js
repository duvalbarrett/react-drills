import React, { useState } from "react";
import "./App.css";
import { NewTask } from "./NewTask";
import { List } from "./List";

function App() {
  const [tasks, settasks] = useState([]);

  const eventHandler = (task) => {
    settasks([...tasks, task]);
  };

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <NewTask addTask={eventHandler} />
      <List tasks={tasks} />
    </div>
  );
}

export default App;
