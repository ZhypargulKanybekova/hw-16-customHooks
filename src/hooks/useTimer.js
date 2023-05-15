import  { useEffect, useState } from 'react'

export const useTimer = (state) => {
    const [time,setTime]=useState(+state*60);
    const [start,setStart]=useState(false)

    const restart = () => {
        setTime (0)
     }
     const startTimer = () => { 
        setStart (true)
        setTime(state*60)
      }

      const stopTimer = () => {
        setStart (false)
       }

       useEffect (()=>{
        if (!start)return;
        if(time <=0) return;
        const interval = setInterval(()=> {
            setTime(time -1)
        },1000)
        return ()=>{
            clearInterval (interval)
        }
       } ,[time,start])
       
  return {
        restart,
        startTimer,
        stopTimer,
        time

    }
  
}
