import React, { useState } from 'react';

// Topic: Rendering Lists and Using Keys
const TodoList = () => {
    const [tasks, setTasks] = useState(["Learn React", "Read documentation", "Build projects"]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <input 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
                placeholder="New task..."
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
};

export default function App() {
    return (
        <div>
            <h1>Part 5: Lists and Keys</h1>
            <TodoList />
        </div>
    );
}
