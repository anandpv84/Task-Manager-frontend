import React from "react";

function Task({ task, deleteTask, setEditingTask}) {
    return (
        <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          <span>{task.title}: {task.description}</span>
          <button className="edit-task" onClick={() => setEditingTask(task)}>Edit</button>
          <button className="delete-task" onClick={() => deleteTask(task._id)}>Delete</button>
        </li>
      );
}

export default Task;