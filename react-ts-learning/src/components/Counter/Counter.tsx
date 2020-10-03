import React, {useState} from "react";
import {Button} from "react-bootstrap";

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementValue = () => {
        setCount(count + 1);
        console.log(count);
    };

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            incrementValue();
        }
    };

    return (
        <div>
            <h1>Count - {count}</h1>
            <Button variant={"info"} onClick={() => incrementValue()}>
                Increment value
            </Button>
            <Button variant={"warning"} onClick={() => incrementFive()}>
                Increment by five
            </Button>
        </div>
    );
}

export default Counter;