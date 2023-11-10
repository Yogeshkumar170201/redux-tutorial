"use client"

import React from 'react'
import './bonus.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/bonusSlice'

const Bonus = () => {
    const points = useSelector(state=>state.bonus.points)
    const dispatch = useDispatch()
  return (
    <div className="main">
      <p>Points : {points}</p>
      <button onClick={()=>dispatch(increment())}>increment +</button>
    </div>
  )
}

export default Bonus