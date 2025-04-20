import React from "react";
import Task from "./Task";

function TaskList({ tasks = [], selectedCategory = "All", onDeleteTask }) {
  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="tasks">
      {filteredTasks.map(task => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
