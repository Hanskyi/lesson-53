import React from 'react';

interface Itask {
    task: string;
    id?: string;
    removeTask?: React.MouseEventHandler;
}

const Task: React.FC<Itask> = props => {
    return (
        <div className="todo-task" id={props.id}>
            <p className="todo-text">{props.task}</p>
            <div>
                <button onClick={props.removeTask} className="todo-btn">delete</button>
            </div>
        </div>
    );
};

export default Task;