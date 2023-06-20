import Header from "./header"
import Main from "./main"
import Footer from "./footer"

import { useState } from "react"

// import "./app.css"
export default function App(){
     const [darkTheme, setDarkTheme] = useState(false)

     function changeTheme(){
        setDarkTheme((currentTheme)=>{
             return !currentTheme
        })
     }

     const theme_btn_style = {
        backgroundColor: darkTheme ? "white" : "darkorange",
        color:darkTheme ? "#333" : "white"
     }

    return(
        <div className="container">
              {/* <button style={theme_btn_style} onClick={changeTheme} className="theme-btn">Change Theme</button> */}
              {/* <Header theme={darkTheme}/> */}
              {/* <Main theme={darkTheme}/> */}
         
              {/* <Footer theme={darkTheme}/> */}
        </div>
    )
}

