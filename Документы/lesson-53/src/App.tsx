import React, {useState, useRef} from 'react';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import './App.css';
import Task from "./Task/Task";
import {nanoid} from "nanoid";

const App = () => {

    const [userTask, setUserTask] = useState([
        {task: 'hello world', id: '12345678'},
        {task: 'today we do....', id: '876543'},
    ]);

    const [currentTask, setCurrentTask] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(event.target.value);
    };
    const createNewTask = () => {
        if (currentTask !== "") {
            const copyUserTask = [...userTask];
            const taskCopy = {...copyUserTask[1]};
            taskCopy.task = currentTask;
            taskCopy.id = nanoid();
            copyUserTask.unshift(taskCopy)
            setUserTask(copyUserTask);
            setCurrentTask('')
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        }
    }

    const removeTask = (id:string) => {
        const taskCopy = [...userTask];
        const index = userTask.findIndex(task => task.id === id);
        taskCopy.splice(index, 1)
        setUserTask(taskCopy)
    }
    return (
        <div className="App">
            <div className="container">
                <AddTaskForm
                    createNewTask={createNewTask}
                    setCurrentTask={handleTextChange}
                    inputRef={inputRef}
                />
                <div className="todo-container">
                    {userTask.map((user, index) => {
                        return (
                            <Task task={user.task} id ={user.id} key={user.id} removeTask = {() => removeTask(user.id)}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
