import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import EditTaskForm from './components/EditTaskForm'

import './App.css'


function App() {

  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(()=>{
    fetchTasks()
  })

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:5000/api/tasks');
    setTasks(response.data);
  }

  const addTask = async (task) => {
    const response = await axios.post('http://localhost:5000/api/tasks', task);
    setTasks([...tasks, response.data]);
  };

  const updateTask = async (id, updatedTask) => {
    const response = await axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTask);
    setTasks(tasks.map(task => (task._id === id ? response.data : task)));
    setEditingTask(null);
  };


  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    setTasks(tasks.filter(task => task._id !== id));
  };


  return (
    <div className="App">
      
      <h1>Task Manager</h1>
      {editingTask ? (
        <EditTaskForm
          task={editingTask}
          updateTask={updateTask}
          cancelEdit={() => setEditingTask(null)}
        />
      ) : (
        <AddTaskForm addTask={addTask} />
      )}
      <div>
      <TaskList tasks={tasks} deleteTask={deleteTask} setEditingTask={setEditingTask} />
      </div>

    </div>
  );
}

export default App;
