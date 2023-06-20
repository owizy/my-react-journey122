import { useState } from "react"

export default function Counter(){
   
    const[count, setCount] =  useState(2) // destructuring the array that will be returned by useState

    // using state to declare boolean
    const[isFriendly, setFriendly]  = useState(false)
           
    function handleDecrease(){
          setCount((currentValue)=>{
               return currentValue - 1
          })
         
    }

     function handleIncrease(){
            setCount((currentValue)=>{
                  return currentValue + 1
            })
        
    }

    function handleFriend(){
         setFriendly((currentValue)=>{
              return !currentValue
         })
    }


    return(
        <div className="counter-container">
            <p>{isFriendly ? "Oh! Codeprof is Friendly" : "Codeprof is Hostile" }</p>
             <div>
                <button onClick={handleDecrease}>-</button>
               <span>{count}</span>
               <button onClick={handleIncrease}>+</button>
             </div>

             <button onClick={handleFriend} className="friend-btn">Change</button>
        </div>
    )
}