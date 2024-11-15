import React, { useState } from "react";
import "./index.css"; // Import the CSS file for styling

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: newTask, completed: false, kanbanIndex: 0 },
    ]);
    setNewTask("");
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCheckboxChange = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleMoveTask = (id, direction) => {
    debugger
    // setTasks((prevTasks) =>
    //   prevTasks.map((task) =>
    //     task.id === id
    //       ? { ...task, kanbanIndex: task.kanbanIndex + direction, completed: false }
    //       : task
    //   )
    // );


    const updatedTasks = tasks.map((task) =>
        task.id === id
          ? { ...task, kanbanIndex: task.kanbanIndex + direction, completed: false }
          : task
      )
      setTasks(updatedTasks)
  };

  const renderTasks = (kanbanIndex) =>
    tasks
      .filter((task) => task.kanbanIndex === kanbanIndex)
      .map((task) => (
        <div key={task.id} className="task">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleCheckboxChange(task.id)}
          />
          <span>{task.text}</span>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          {kanbanIndex > 0 && (
            <button
              onClick={() => handleMoveTask(task.id, -1)}
              disabled={!task.completed}
            >
              Back
            </button>
          )}
          {kanbanIndex < 3 && (
            <button
              onClick={() => handleMoveTask(task.id, 1)}
              disabled={!task.completed}
            >
              Forward
            </button>
          )}
        </div>
      ));


      console.log(tasks, "tasks")
  return (
    <div className="kanban-board">
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div className="kanban-columns">
        {["To Do", "In Progress", "Review", "Done", ].map((title, index) => (
          <div key={index} className="kanban-column">
            <h3>{title}</h3>
            {renderTasks(index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
