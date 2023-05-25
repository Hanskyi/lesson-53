import React, {useState, useRef} from 'react';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import './App.css';
import Task from "./Task/Task";
import {nanoid} from "nanoid";

const App = () => {

    const [userTask, setUserTask] = useState([
        {task: 'hello world', id: '12345678', checkboxId: '1432143'},
        {task: 'today we do....', id: '876543', checkboxId: '1354'},
    ]);

    const [currentTask, setCurrentTask] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(event.target.value);
    };
    const createNewTask = (index: number) => {
        if (currentTask !== "") {
            const copyUserTask = [...userTask];
            const taskCopy = {...copyUserTask[index]};
            taskCopy.task = currentTask;
            taskCopy.id = nanoid();
            taskCopy.checkboxId = nanoid();
            copyUserTask.unshift(taskCopy);
            setUserTask(copyUserTask);
            setCurrentTask('');
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        }
    };

    const removeTask = (id: string) => {
        const taskCopy = [...userTask];
        const index = userTask.findIndex(task => task.id === id);
        taskCopy.splice(index, 1);
        setUserTask(taskCopy);
    }


    return (
        <div className="App">
            <div className="container">
                <AddTaskForm
                    createNewTask={() => createNewTask(0)}
                    setCurrentTask={handleTextChange}
                    inputRef={inputRef}
                />
                <div className="todo-container">
                    {userTask.map((user, index) => {
                        return (
                            <Task
                                task={user.task}
                                id={user.id}
                                checkboxId={user.checkboxId}
                                key={user.id}
                                removeTask={() => removeTask(user.id)}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default App;
