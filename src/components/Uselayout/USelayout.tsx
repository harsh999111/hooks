import React, { useEffect } from 'react'
import { useState, useLayoutEffect } from 'react'

const UseLayOutComponent = () => {
    const [bgColor, setBgColor] = useState('yellow')

      useEffect(() => {
        console.log("UseEffect is Running ...");
      }, []);

    useLayoutEffect(() => {
        console.log("UseLayoutEffect is Running..")
     document.body.style.backgroundColor = bgColor
    }, [bgColor])

  
    
  return (
    <div className='bg-black text-white  space-x-4'><div>
        UseLayOutComponent
    </div>
        <button onClick={()=>setBgColor('red')}>Changcolor</button>
    </div>
  )
}

export default UseLayOutComponent