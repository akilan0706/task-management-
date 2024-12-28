
import axios from "axios";
import TaskForm from "./components/TaskForm1";
import TaskList from "./components/TaskList1";
import { useState,useEffect } from "react";


const App = () => {
    const [tasks, setTasks] = useState([0]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get("/api/tasks");
            setTasks(response.data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    const handleAddTask = async (task) => {
        try {
            const response = await axios.post("/api/tasks", task);
            setTasks([...tasks, response.data]);
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            await axios.delete(`/api/tasks/${id}`);
            setTasks(tasks.filter((task) => task.id !== id));
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm handleAddTask={handleAddTask} />
            <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} />
        </div>
    );
};


  


export default App;
