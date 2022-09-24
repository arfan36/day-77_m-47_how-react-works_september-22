import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);        // this line asynchronous
    };

    useEffect(() => {
console.log(steps);
    }, [steps]);

    return (
        <div>
            <h2>This is my smart Watch</h2>
            <h3>My Current Steps: {steps}</h3>
            <button onClick={increaseSteps}>De Dour.......</button>
        </div>
    );
};

export default Watch;