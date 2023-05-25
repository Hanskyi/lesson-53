import React from 'react';

interface ITask {
    task: string;
    id?: string;
    removeTask?: React.MouseEventHandler;
    checkboxId?:string;
}

const Task: React.FC<ITask> = props => {
    return (
        <div className="todo-task" id={props.id}>
            <div className="checkbox-container">
                <input type="checkbox" id={props.checkboxId}/>
                <label htmlFor = {props.checkboxId}>{props.task}</label>
            </div>

            <div>
                <button onClick={props.removeTask} className="todo-btn">delete</button>
            </div>
        </div>
    );
};

export default Task;