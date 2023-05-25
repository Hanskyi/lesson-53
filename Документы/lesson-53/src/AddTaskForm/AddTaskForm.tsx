import React from 'react';

interface IAddTaskFormProps{
    createElement?: React.MouseEventHandler<HTMLButtonElement>;
    currentTask?:string;
    setCurrentTask?:React.ChangeEventHandler;
    createNewTask?:React.MouseEventHandler;
    inputRef?:React.RefObject<HTMLInputElement>;
}
const AddTaskForm: React.FC<IAddTaskFormProps> = (props) => {

    return (
        <div>
            <div className="header-container">
                <div className="input-container">
                    <input ref={props.inputRef} onChange={props.setCurrentTask}  type="text" placeholder="write ToDo" className="input"/>
                </div>
                <div className="btn-container">
                    <button onClick={props.createNewTask} className="btn">Add Todo</button>
                </div>
            </div>
        </div>
    );
};

export default AddTaskForm;