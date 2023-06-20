import {useState} from "react"
export default function Student(){

    const [student, updateStudent] = useState({
          name:" Thompson Musiliu",
          dept:"Electrical & Electronics",
          status:"active",
          gender:"male",

    })

    function handleUpdate(){
        updateStudent((currentStudentData)=>{
              return {
                   ...currentStudentData,
                   name:"Mubarakah Akorede",
                   dept:"Medical Science and Laboratory Technology"
              }
        })
    }

    return(
         <div>
               <h1>About Student</h1>
               <p>My name is {student.name}. I am a student of {student.dept} engineering department, UNILAG.</p>
               <button onClick={handleUpdate}>Update Student Info</button>
         </div>
    )
}