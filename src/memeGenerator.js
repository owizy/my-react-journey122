import {useState} from "react"
// import "./meme-gen.css"
export default function MemeGene(){

       const[formData, setFormData] = useState({
            topText:"",
            bottomText:""
       })

       const [imgUrl, setImgUrl] = useState("")

       function handleChange(event){
            const {name, value} = event.target // destructing the return object
            setFormData((currentFormData)=>{
                     return{
                          ...currentFormData, 
                          [name] : value
                     }
            })

       }

       function handleReset(){
            fetch('https://api.imgflip.com/get_memes').then((res)=>{
                  return res.json()
            }).then((res)=>{
                    let randomNum = Math.floor(Math.random() * 100)
                    setImgUrl(res.data.memes.url)
            })
       }          
            setFormData((currentFormData)=>{
                  return {
                        ...currentFormData,
                        topText:"",
                        bottomText:""
                  }
            })
       }

       function handleGenerate(){
            //   fetch thd imgUrl from the API
            fetch('https://api.imgflip.com/get_memes').then((res)=>{
                  return res.json()
            }).then((res)=>{
                    let randomNum = Math.floor(Math.random() * 100)
                    setImgUrl(res.data.memes[randomNum].url)
            })
       }

       
      return(
            <div className="container">
                  <section className="top">
                        <div className="input-group">
                                <input  type="text" placeholder="Top Text" name="topText" value={formData.topText} onChange={handleChange}/>
                                <input  type="text" placeholder="Bottom Text" name="bottomText" value={formData.bottomText} onChange={handleChange}/>
                        </div>
                        <button onClick={handleGenerate}>Generate</button>
                  </section>
                  <section className="middle">
                         <div className="meme-container">

                             <h1 className="topText">{formData.topText}</h1>


                          <img src={imgUrl}/>

                            <h1 className="topText">{formData.bottomText}</h1>

                         </div>
                     
                  </section>
                  <section className="bottom">
                       <button>Download</button>
                       <button>Print</button>
                       <button>Share</button>
                       <button onClick={handleReset}>Reset</button>
                  </section>
                
            </div>
      )
