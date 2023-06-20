import bannerImg from "./pattern.png"
import "./banner.css"
import {Link } from "react-router-dom"
export default function Banner(){
     return(
        <section>
               <h1>
                   What you do today...<br/>determines your tomrrow...
               </h1>

                <Link to="/register"><button>Register</button></Link>

                <div>
                       
                        
                </div>
        </section>
     )
}