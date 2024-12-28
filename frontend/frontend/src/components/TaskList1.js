import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, handleDeleteTask }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} handleDeleteTask={handleDeleteTask} />
            ))}
        </ul>
    );
};

export default TaskList;