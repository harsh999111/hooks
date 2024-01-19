// Moneycontext.js
import React from 'react';
import Mycontext from './Mycontext';

const Moneycontext = (props) => {
    const yojna = {
        money: 100,
        hello: true,
        pention: 500,
    };

    return (
        <Mycontext.Provider value={{ yojna }}>
            {props.children}
        </Mycontext.Provider>
    );
};

export default Moneycontext;
