import React, { useState } from "react";
import Tasks from "./components/Tasks";

import './App.css';
import AddTask from "./components/AddTask";

const App = () => {
  // let message = 'Hello World!';
  const [message, setMessage] = useState('Taks list');
  
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar 1",
      completed: false,
    },
    {
      id: "2",
      title: "Estudar 2",
      completed: false,
    },
  ]);

  return (
    <>
      <div className="container">
        <h1>{message}</h1>
        <AddTask />
        <Tasks tasks={tasks}/>
      </div>
    </>
  );

};

export default App;