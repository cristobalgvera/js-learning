import React from 'react';
import './App.css';
import Greet from "./components/Greet/Greet";
import Counter from "./components/Counter/Counter";
import FunctionClick from "./components/FunctionClick/FunctionClick";

function App() {
    return (
        <div className={"App"}>
            <Greet/>
            <Counter/>
            <FunctionClick
                name={"Test name"}
                age={8}
            />
        </div>
    );
}

export default App;
