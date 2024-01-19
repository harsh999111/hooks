"use client"
import React from 'react'
import { useEffect } from 'react'

const Useeffect = () => {


    useEffect(() => {
            const data =async () => {
                const api =  await fetch('https://jsonplaceholder.typicode.com/todos')

                const result =  await api.json()

                console.table(result);
                
            }
            data()
    }, [])
  return (
  <section className='h-full w-full bg-green-700 text-white'>
    <div>
        <h1>hello</h1>
    </div>
  </section>
  )
}

export default Useeffect