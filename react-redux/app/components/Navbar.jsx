"use client"

import React, { useState } from 'react'

import './navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/accountSlice'

const Navbar = () => {


    const amount = useSelector(state=>state.account.amount)
    const points = useSelector(state=>state.bonus.points)
    const dispatch = useDispatch()

    const [incre, setIncre] = useState(0)

  return (
    <div className='main'>
        <div className='first'>
            <p>redux</p>
            <p>Amount : {amount}</p>
            <p>Points : {points}</p>
        </div>
        <div className='second'>
            <button onClick={()=>dispatch(increment())}>increment +</button>
            <button onClick={()=>dispatch(decrement())}>decrement -</button>
            <input placeholder="Enter the amount of increment" name='incre' value={incre} onChange={(e)=>setIncre(e.target.value)}/>
            <button onClick={()=>dispatch(incrementByAmount(parseInt(incre)))}>increase</button>
        </div>
    </div>
  ) 
}

export default Navbar