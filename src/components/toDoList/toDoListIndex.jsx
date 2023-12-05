import React, { memo, useState } from "react";
import "../../public/css/toDoListStyle.css";

const ToDoListIndex = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    const updatedTask = prompt("Edit task:", tasks[index]);
    if (updatedTask !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[index] = updatedTask;
      setTasks(updatedTasks);
    }
  };
  return (
    <div className="todo-list">
      <h1>ToDo List</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-outline-primary" onClick={addTask}>
          Add
        </button>
      </div>
      <ul>
        <li className="flex-container-header">
          <span className="spanOne">Sl No</span>
          <span className="spanTwo">Description</span>
          <span className="actionButton">Edit</span>
          <span className="actionButton">Delete</span>
        </li>
      </ul>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex-container">
            <span className="spanOne">{index + 1}</span>
            <span className="spanTwo">{task}</span>
            <span className="actionButton">
              <button
                className="btn btn-outline-warning"
                onClick={() => editTask(index)}
              >
                E
              </button>
            </span>
            <span className="actionButton">
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteTask(index)}
              >
                D
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(ToDoListIndex);
