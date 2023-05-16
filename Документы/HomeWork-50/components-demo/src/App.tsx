import React from 'react';
import './App.css';
import Number from "./Number/Number";

const App = () => (
    <div className="App">
        <div className="container">
            <button className="btn">New numbers</button>
            <div className="number-container">
                < Number />
            </div>
        </div>
    </div>
);

export default App;
