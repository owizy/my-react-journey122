export default function Footer(props){
          const darkStyle = {
          backgroundColor: props.theme ? "#333" : "white",
          color:props.theme ? "white" : "#333"

    }
     return(
        <footer style={darkStyle}>
              <p>&copy; Copyright {new Date().getFullYear()}. All rights reserved. Powered by Codeprof  Academy.</p>
        </footer>
     )
}