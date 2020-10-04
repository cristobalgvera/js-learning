import * as React from 'react';
import {useState} from "react";

type Item = {
    id: number,
    value: number,
}

export const Counter = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    function reset() {
        setCount(initialCount);
    }

    function incrementBy(number: number) {
        for (let i = 0; i < number; i++) {
            // setCount(count + 1); // Incorrect
            setCount(prevState => prevState + 1); // Correct
        }
    }

    function decrementBy(number: number) {
        for (let i = 0; i < Math.abs(number); i++) {
            // If new value depends on previous one, you must use this way
            setCount(prevState => prevState - 1);
        }
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => incrementBy(1)}>Increment</button>
            <button onClick={() => decrementBy(-1)}>Decrement</button>
            <button onClick={() => incrementBy(5)}>Increment 5</button>
            <button onClick={() => decrementBy(-5)}>Decrement 5</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};


export const Form = () => {

    const initialName = {
        firstName: '',
        lastName: ''
    };

    const [name, setName] = useState(initialName);

    const changeName = (type: string, value: string) => {
        setName({...name, [type]: value})
    }

    return (
        <form>
            <label htmlFor={"first-name"}>First name:</label>
            <input id={"first-name"} type={"text"} value={name.firstName} onChange={event => changeName('firstName', event.target.value)}/>
            <label htmlFor={"last-name"}>Last name:</label>
            <input id={"last-name"} type={"text"} value={name.lastName} onChange={event => changeName('lastName', event.target.value)}/>
            <h2>Your first name is: {name.firstName}</h2>
            <h2>Your last name is: {name.lastName}</h2>
        </form>
    );
};

export const Arrays = () => {
    const [items, setItems] = useState<Item[]>([]);

    const itemsList = items.map(({id, value}) => <li key={id}>{value}</li>);

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }]);
    };

    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {itemsList}
            </ul>
        </div>
    );
};
