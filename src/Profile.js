import me from "./me.jpg"


export default function Profile(props){

  
 const darkTheme = {
            backgroundColor: props.theme ? "#333" : "white",
            color:props.theme ? "white" : "#333"
      }
      

      return(
        <div style={darkTheme} className="profile-card">
               
               <img src={me} width="100"/>
               <div>
                    <h3>Post: <span>{props.title}</span></h3>
                    <p>
                          The coming of the lord will come like a thief in the night said by Codeprof  The coming of the lord will come like a thief in the night said by Codeprof  The coming of the lord will come like a thief in the night said by Codeprof
                    </p>
                    <small>Codeprof. O</small>
                    
               </div>
              
        </div>
      )
}