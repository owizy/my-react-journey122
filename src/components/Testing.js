import {useState} from "react"
export default function Testing(){
  
    
     const [courses, setCourses ] = useState(["course 1", "course 2"])
    
      function addCourse(){

            setCourses((currentCourse)=>{
                  let new_course = `course ${courses.length + 1}`
                  return [...currentCourse, new_course]
            })

      }
    
       const new_courses = courses.map((course)=>{
              return  <h1>{course}</h1>
       })


    
    return(
        <div>
            <button onClick={addCourse}> Add Course</button>

              {new_courses}
            
        </div>
    )
}