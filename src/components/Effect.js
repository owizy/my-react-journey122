import {useState, useEffect} from "react"
import "./effect.css"
import img from "./img.jpg"


export default function Effect(){
    const [imageSource, setImageSource] = useState(img)
    const [formData, setFormData] = useState({
          topText:"",
          bottomText:""
    })

    function handleChange(event){
        setFormData((currentFormData)=>{
             return{
                 ...currentFormData,
                 [event.target.name] : event.target.value
             }
        })
           
    }

     function handleGenerate(){
          
       // fetch imageUrl from the api
      fetch('https://api.imgflip.com/get_memes').then((res)=>{
         return res.json()
    }).then((res)=>{
        let randomNumber = Math.floor(Math.random() * 100)
        setImageSource(res.data.memes[randomNumber].url)   
    })
         
  
     }
   

    return(
        <div className="container">
            <section className="top"> 
                 <div className="input-group">
                      <input placeholder="Top Text"  name="topText" value={formData.topText} onChange={handleChange}/>

                       <input placeholder="Bottom Text"  name="bottomText" value={formData.bottomText} onChange={handleChange}/>


                 </div>

                   <button onClick={handleGenerate}>Generate</button>
            </section>
            <section className="middle">
                <div className="meme-container">
                    <p className="topText">{formData.topText}</p>
                     <img src={imageSource}/>
                    <p className="bottomText">{formData.bottomText}</p>
                </div>
                
            </section>
            <section className="bottom">
                <button>Print</button>
                <button>Download</button>
                <button>Share</button>
                <button>Reset</button>
            </section>
        </div>
    )
   
}