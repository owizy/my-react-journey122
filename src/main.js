import Profile from "./Profile"
import Courses from "./courses"
import Signup from "./signup"
import Student from "./student"
import Effect from "./effect"

export default function Main(props){


     const darkTheme = {
            backgroundColor: props.theme ? "#666" : "whitesmoke",
            color:props.theme ? "white" : "#333"
      }
      
    return(
        <main style={darkTheme}>
               {/* <p className="story">This is the main body of this website.  I am coming back to add content to it.</p> */}
               {/* <Profile title="End of time" theme ={props.theme}/> */}
{/* 
                    {/* <Courses/> */}

                    {/* <Student/> */}
                    {/* <Signup/>  */}
                    {/* <Effect/> */}

        </main>
    )
}