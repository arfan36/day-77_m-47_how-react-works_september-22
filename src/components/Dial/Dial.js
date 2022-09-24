import React from 'react';
import Tablet from '../Tablet/Tablet';

const Dial = (props) => {
    return (
        <div style={{border: "2px solid blue", margin: "5px"}}>
            <h3>This is Dial</h3>
            <p>steps so far: {props.steps}</p>
            <Tablet></Tablet>
        </div>
    );
};

export default Dial;