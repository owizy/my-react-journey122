 import { useState } from "react"
export default function Student(){
    const[student, editStudent] = useState({
          name:"Thompson Musiliu",
          age:12,
          dept:"elect/elect",
          status:"completed"
    })

    function handleUpdate(){
          editStudent((prevData)=>{
               return {
                    ...prevData,
                   name:"Kenneth Idisi",
                   age:10 
               }
          })

          
    }
    return(
        <div>
             <button onClick={handleUpdate}>Update Student</button>
             <h1>{student.name}</h1>
             <h1>{student.age}</h1>
        </div>
    )
}