import React, { useState } from "react";

function EditTaskForm({ task, updateTask, cancelEdit }) {
 
    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() && description.trim()) {
          updateTask(task._id, { title, description });
        }
      };
    

      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
            required
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task description"
            required
          />
          <button  className="edit-task" type="submit">Update</button>
          <button className="cancel-edit" type="button" onClick={cancelEdit}>Cancel</button>
        </form>
      );

}

export default EditTaskForm