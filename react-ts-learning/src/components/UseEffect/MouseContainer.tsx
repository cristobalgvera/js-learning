import React, {useState} from "react";
import {MouseMove} from "./Examples";

export const MouseContainer = () => {
    const [show, setShow] = useState(true);

    return (
        <>
            <button onClick={() => setShow(!show)}>Toggle display</button>
            {show && <MouseMove/>}
        </>
    );
};