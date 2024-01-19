"use client"
import React, { useState } from 'react';

const UseStateExample = () => {
  const [counter, setCounter] = useState(0);

  const incress = () => {
    setCounter(counter + 1);
  };

  const decress = () => {
    setCounter(counter - 1);
  };

  return (
    <section className='flex justify-center h-full w-full items-center pt-12 pb-12 bg-yellow-500 text-white'>
      <div className='space-y-8'>
        <h1>Number {counter}</h1>
        <div className='flex justify-center space-x-6'>
          <button onClick={incress} className='bg-red-600   px-4 rounded-lg py-2'>
            Incress
          </button>
          <button onClick={decress} className='bg-red-600 px-4 rounded-lg py-2'>
            Decress
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseStateExample;
