import { useState} from "react"

export default function Counter(){
   
    const [count, setCount] = useState(0) // let count = 0
    
     
    function handleIncrease(){
          setCount((prevValue)=>{
               return prevValue + 1
          })
    }

     function handleDecrease(){
           setCount((prevValue)=>{
              return  prevValue - 1
          })
    }


    return(
        <div className="counter-container">
               <button onClick={handleIncrease}>+</button> 
               <span>{count}</span>
               <button onClick={handleDecrease}>-</button>
        </div>
    )

}