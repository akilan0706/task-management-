import React from "react";

const TaskItem = ({ task, handleDeleteTask }) => {
    return (
        <li>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </li>
    );
};

export default TaskItem;