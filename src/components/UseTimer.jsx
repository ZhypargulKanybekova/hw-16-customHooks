import React, { useState } from 'react'
import { useTimer } from '../hooks/useTimer'

export const UseTimer = () => {
    const [value,setValue]=useState(true)

    const changeHandle=(event)=>{
        setValue(event.target.value)
    }
    const submitHamdler =(event)=>{
        event.preventDefault()
    }
    const {  restart,startTimer,stopTimer,time}=useTimer(value)

  return (

       <form onSubmit={submitHamdler}>
        <input type='number' value={value} onChange={changeHandle}/>
        <h1>{time}</h1>
        <button onClick={startTimer}>START</button>
        <button onClick={stopTimer}>STOP</button>
        <button onClick={restart}>RESET</button>
       
        </form>    
    
  )
}
