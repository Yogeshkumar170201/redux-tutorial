"use client"

import './amount.css'

import { useSelector } from 'react-redux'

const Amount = () => {
  const amount = useSelector(state=>state.account.amount)
  const points = useSelector(state=>state.bonus.points)
  return (
    <div className="main">
      <p>Amount : {amount}</p>
      <p>Points : {points}</p>
    </div>
  )
}

export default Amount