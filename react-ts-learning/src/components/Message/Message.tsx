import React, {useState} from "react";
import {Button} from "react-bootstrap";

const Message = ({initialMessage}: any) => {
    const [message, setMessage] = useState(initialMessage);

    const changeMessage = () => {
        setMessage(message == initialMessage ? 'Thank you for press the button' : initialMessage);
    }

    return (
        <div>
            <h1>{message}</h1>
            <Button variant={"info"} onClick={() => changeMessage()}>
                Press me!
            </Button>
        </div>
    );
}

export default Message;