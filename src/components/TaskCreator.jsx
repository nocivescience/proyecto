import React, {useState} from "react";
export const TaskCreator = (props) => {
    const [newTask, setNewTask] = useState("");
    const upateNewTaskValue = (e) => setNewTask(e.target.value);
    const createNewTask = () => {
        props.callback(newTask);
        setNewTask("");
    };
    return (
        <div className="my-1">
            <input type="text" className="form-control" value={newTask} onChange={upateNewTaskValue}/>
            <button className="btn btn-primary mt-1" onClick={createNewTask}>Add</button>
        </div>
    )
}