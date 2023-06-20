import { useState } from "react"

export default function Friend(){

      const [friendly, setFriendly] = useState(true)

      function handleFriendly(){
          setFriendly((prevValue)=>{
             return !prevValue
          })
      }

      return(
        <div>
           <h1 className="friend">{friendly ? "Ade is Friendly": "Ade is too Hostile"}</h1>
           <button onClick={handleFriendly}>Change</button>
 </div>
      )
}