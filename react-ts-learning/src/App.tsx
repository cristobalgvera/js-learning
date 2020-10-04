import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Routes from "./components/Routes";
import Menu from "./components/Menu";

function App() {
    return (
        <BrowserRouter>
            <div className={"App"}>
                <Menu/>
                <Routes/>
            </div>
        </BrowserRouter>
    );
}

export default App;
