export default function Footer(props){

      const darkTheme = {
            backgroundColor: props.theme ? "#333" : "white",
            color:props.theme ? "white" : "#333"
      }
      
   
     return(
        <footer style={darkTheme}>
              <p style={darkTheme}>This is the footer of this website</p>
        </footer>
     )
}