import React, { useState } from "react";
import { TaskCreator } from "./TaskCreator";
export const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    }
    return (
        <div>
            <h3 className="bg-primary text-white text-center p-2">
                To Do List
                <TaskCreator callback={addTask}/>
                <ul>
                    {
                        tasks.map((task, index) =>
                            <li key={index}>{task}</li>
                        )
                    }
                </ul>
            </h3>
        </div>
    )
};