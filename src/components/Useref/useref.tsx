"use client"
import React from 'react'
import { useRef } from 'react'

const useref = () => {

    const myref = useRef(null)

    console.log(myref);
    
  return (
    <section className='h-full w-full bg-red-400 text-white py-10'>
                <div className='space-x-6'>
                    <input ref={myref}/>
                    <h1 ref={myref}>hello</h1>
                    <button className='bg-black rounded-xl px-4 py-2'>Click</button>
                </div>
    </section>
  )
}

export default useref