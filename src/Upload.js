import upload from "./upload_btn.png"
import avatar from "./avatar.png"
import {useState, useEffect} from "react"
import "./upload.css"
export default function Upload(){
       
       const [images, setImages]  = useState([])
       const [imageUrls, setImgUrls] = useState([])

       function handleUpload(event){

           setImages([...event.target.files])
           
       }

       useEffect(()=>{

            if(images.length < 1){
                 return 
            }

            const newImgUrls = []
             images.forEach((img)=>{
                  return newImgUrls.push(URL.createObjectURL(img))
             })

             setImgUrls(newImgUrls)
       }, [images])

      return(
         <form>

                 <div className="profile">
                         <img  className="avatar" src={imageUrls}width={60}/>
                          <input type="file" id="file" accept="image/*" onChange={handleUpload}/>
                         <label htmlFor="file"><img  className="upload_btn" src={upload} /></label>
                 </div>

                 <input placeholder="Name" type="text" name ="name" />
                 <input placeholder="Email" type="email"  name="email"/>
                 <button type="submit">Submit</button>

                 {/* this is to display multiple images */}
                 {/* {imageUrls.map((imgUrl)=>{
                     return <img src={imgUrl} width={100}/>
                 })} */}
         </form>
      )
}