"use client"
import Useeffect from '@/components/Useeffect/Useeffect'
import Usereducer from '@/components/Usereducer/Usereducer'
import Usestate from '@/components/Usestate/Usestate'
import Useref from '@/components/Useref/useref'
import React, {  } from 'react'
import Moneycontext from '@/components/Usecontext/Context/Moneycontext'
import Props from '@/components/Props/Props'
import Children from '@/components/Usecontext/Context/Children'
import UseLayOutComponent from '@/components/Uselayout/USelayout'
import UseMemoComponent from '@/components/Usememo/Usememo'


const Home = () => {
  return (
    <div className='text-center h-full w-full  pt-6 '>
      <Moneycontext>
        <Children/>
        <Usestate/>
        <Usereducer/>
        <Useeffect/>  
        <Useref/>
      </Moneycontext>
      <Props/>
      <UseLayOutComponent/>
      <UseMemoComponent/>
    </div>
  )
}

export default Home