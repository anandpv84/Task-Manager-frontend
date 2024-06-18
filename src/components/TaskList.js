import React from "react";
import Task from './Task';

function TaskList({tasks,deleteTask,setEditingTask}) {
    return(
        <ol>
        {tasks.map(task => (
          <Task
            key={task._id}
            task={task}
            deleteTask={deleteTask}
            setEditingTask={setEditingTask}
          />
        ))}
      </ol>
    );
}

export default TaskList