import React, { useState } from "react";

function AddTaskForm({ addTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});



    const validate = () => {
        const errors = {};
        if (!title.trim()) {
          errors.title = '!';
        }
        if (!description.trim()) {
          errors.description = '!';
        }
        return errors;
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
          }
        if (title.trim() && description.trim()) {
            addTask({ title, description });
            setTitle('');
            setDescription('');
            setErrors({});
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task title"
                />
                {errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}
           
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task description"
                />
                {errors.description && <span style={{ color: 'red'}}>{errors.description}</span>}
           
            <button className="add-task" type="submit">Add</button>
        </form>
    );
}

export default AddTaskForm;