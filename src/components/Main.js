import Banner from "./banner"
import CardContainer from "./card_container"
import Counter from "./Counter"
import Testing from "./Testing"
import Student from "./Student"
import Signup from "./Signup"


export default function Main(props){
        const darkStyle = {
          backgroundColor: props.theme ? "#666" : "white",
          color:props.theme ? "white" : "#333"

    }
    return(
        <main style={darkStyle}>

            {/* <Banner/>
            <CardContainer theme={props.theme}/>

            <Counter/> */}

            {/* <Testing/> */}

            {/* <Student/> */}

            {/* <Signup  /> */}

          
     
              
        </main>
    )
}