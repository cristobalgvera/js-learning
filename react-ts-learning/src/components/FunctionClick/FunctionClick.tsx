import * as React from 'react';
import {useState} from "react";
import {Button, Form} from 'react-bootstrap';

type Props = {
    name: string
    age?: number
};

const FunctionClick = (props: Props) => {
    const {name, age} = props;
    const [userName, setUserName] = useState(name);
    const [userAge, setUserAge] = useState(age);

    function changeUserName(newName: string) {
        setUserName(newName);
    }

    const changeUserAge = (newAge: number) => {
        setUserAge(newAge);
    }

    return (
        <div>
            <h1>My name is {userName}</h1>
            <Form className={"form"} noValidate validated={true}>
                <Form.Group controlId={"CONTROL_ID"}>
                    <Form.Label>Name: </Form.Label>
                    <Form.Control type={"text"}/>
                </Form.Group>
            </Form>
            <h1>My age is {userAge}</h1>
            <Form className={"form"} noValidate validated={true}>

            </Form>
        </div>
    );
};

export default FunctionClick;