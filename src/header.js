let  Header = (props)=>{

      const darkTheme = {
            backgroundColor: props.theme ? "#333" : "white",
            color:props.theme ? "white" : "#333"
      }
      

     return(
         <header style={darkTheme}>

              <h1 style={darkTheme}>Logo</h1>
               <nav style={darkTheme}>
                     <a>Home</a>
                     <a>About us</a>
                     <a>Courses</a>
                     <a>Contact us</a>
               </nav>
            
         </header>
     )
}

export default Header