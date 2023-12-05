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
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item">
            {task}
            <span className="buttons">
              <button
                className="btn btn-outline-warning"
                onClick={() => editTask(index)}
              >
                Edit
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(ToDoListIndex);
