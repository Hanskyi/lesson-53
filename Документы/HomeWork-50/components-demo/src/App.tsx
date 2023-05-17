import React, { useState } from 'react';
import './App.css';
import Number from "./Number/Number";

const App = () => {
    const [numbers, setNumbers] = useState<number[]>([]);

    const generateNewNumbers = () => {
        setNumbers([]);
        const newNumbers: number[] = [];

        while (newNumbers.length < 5) {
            const randomNumber: number = Math.floor(Math.random() * (36 - 5 + 1)) + 5;

            if (!newNumbers.includes(randomNumber)) {
                newNumbers.push(randomNumber);
            }
        }

        newNumbers.sort((a, b) => a - b);
        setNumbers(newNumbers);
    };

    return (
        <div className="App">
            <div className="container">
                <button onClick={generateNewNumbers} className="btn">New numbers</button>
                <div className="number-container">
                    <Number numbers={numbers} />
                </div>
            </div>
        </div>
    );
};
export default App;
