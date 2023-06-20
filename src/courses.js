import {useState} from "react"
export default function Courses(){

    const [courses, setCourses] = useState(["course 1", "course 2"])
     
       const newCourses = courses.map((course)=>{
              return <h1>{course}</h1>
       })

    
       function handleCourse(){
              setCourses((prevCourses)=>{
                  let course = `Course ${prevCourses.length + 1}`
                 return [...prevCourses, course ]
              })
       }
    return(
        <div>
               <button onClick={handleCourse}>Add Course</button>
              {newCourses}
        </div>
     )
}