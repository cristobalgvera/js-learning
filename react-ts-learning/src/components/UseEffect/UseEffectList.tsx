// @flow
import * as React from 'react';
import {Counter, IntervalCounter} from "./Examples";
import {MouseContainer} from "./MouseContainer";

const UseEffectList = () => {
    return (
        <>
            <h1>useEffect</h1>
            <Counter/>
            <hr/>
            <MouseContainer/>
            <hr/>
            <IntervalCounter/>
            <hr/>
        </>
    );
};

export default UseEffectList;