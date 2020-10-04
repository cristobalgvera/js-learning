import * as React from 'react';
import {useEffect, useState} from "react";

export const Counter = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    /*
        useEffect() is called after every component render.

        [count] is to update status just when count change (componentWillUpdate).

        If useEffect doesn't have [] | [...any] as second parameter, it will
        update every time component render itself
     */
    useEffect(() => {
        console.log('Counter useEffect - Updating document title');
        document.title = `You clicked ${count} times`;
    }, [count]);

    const increment = () => {
        setCount(prevState => prevState + 1);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <input type={"text"} value={name} onChange={event => setName(event.target.value)}/>
        </div>
    );
};

export const MouseMove = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (event: MouseEvent) => {
        console.log('Mouse move event');
        setX(event.clientX);
        setY(event.clientY);
    };

    // If useEffect have a [], it will update just once (componentDidMount)
    useEffect(() => {
        console.log('MouseMove useEffect called');
        window.addEventListener('mouseover', logMousePosition);

        return () => {
            console.log('MouseMove useEffect unmounting code called');
            window.removeEventListener('mouseover', logMousePosition);
        };
    }, []);

    return (
        <div>
            X: {x} | Y: {y}
        </div>
    );
};

export const IntervalCounter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prevState => prevState + 1);

    useEffect(() => {
        const interval = setInterval(increment, 0.5 * 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
};
