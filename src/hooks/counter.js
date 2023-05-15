import { useState } from "react"


export const useCounter =()=>{
    const [count , setCount] = useState(0)
     
    function inc (num){
        setCount((prev)=>prev + num)
    }
    function dec (num){
        setCount(count > 0 ? (prev)=> prev-num :0);
    }
    function reset (){
        setCount((prev)=> prev = 0)
    }

    return{
        count,inc,dec,reset
    }
}