export default function Header(props){

    const darkStyle = {
          backgroundColor: props.theme ? "#333" : "white",
          color: props.theme ? "white" : "#333"

    }
    return(
        <header style={darkStyle}>
                {/* logo */}
               <h3 style={darkStyle}>Logo</h3>

               {/* navbar */}
               <nav style={darkStyle}>
                    <a style={darkStyle} href="">Home</a>
                    <a style={darkStyle} href="">About us</a>
                    <a style={darkStyle} href="">Sell</a>
                    <a style={darkStyle} href="">Make a Deal</a>
                    <a style={darkStyle} href="">Contact us</a>
               </nav>


        </header>
    )
}