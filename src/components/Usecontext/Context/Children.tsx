// SomeChildComponent.js
import React, { useContext } from 'react';
import Mycontext from './Mycontext';

const SomeChildComponent = () => {
    const { yojna } = useContext(Mycontext);
    const data = useContext(Mycontext)
    console.log(data);
    

    return (
        <div>
            <p>Money: {yojna.money}</p>
            <p>Hello: {yojna.hello.toString()}</p>
            <p>Pension: {yojna.pention}</p>
        </div>
    );
};

export default SomeChildComponent;
