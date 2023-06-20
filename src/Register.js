import "./register.css"
import avatar from "./avatar.png"
import {useState, useEffect} from "react"
export default function Register(){

    const [images, setImages] = useState([])
    const [imageUrl, setImageUrl] = useState([])



    function handleChange(event){
     
            
           setImages([...event.target.files])
    }

    useEffect(()=>{
            if(images.length < 1){
                return
            }

            let newImageUrl = []
            images.forEach((img)=>{
                
                    return newImageUrl.push(URL.createObjectURL(img))
                })
                setImageUrl(newImageUrl)
                    
    }, [images])
    return(
        <form>
              <div className="input-group profile">
                   <img src={imageUrl}  width={100}/>
                   <input type="file" id="file"  onChange={handleChange} accept="image/*"/>
                   <labeL htmlFor="file">Upload</labeL> 
              </div>
              <div className="input-group">
                  
                   <input type="text" placeholder="First Name"/>
                   
                  
              </div>
              <div className="input-group">
                  
                 <input type="text" placeholder="Last Name"/>
                   
                  
              </div>
              <div className="input-group">
                  
                   <input type="email" placeholder="Email"/>
                   
              </div>

              <div className="input-group">
                  
                   <input type="number" placeholder="Phone"/>
                   
              </div>

               <div className="input-group">
                  
                   <label>Select Course</label>
                   <select>
                          <option>--</option>
                          <option>Software Development</option>
                          <option>Web Development</option>
                          <option>Mobile App Development</option>
                          <option>Digital Marketing</option>
                          <option>Artificial Intelligence</option>
                          <option>Machine Learning</option>
                          <option>Data Analysis</option>
                          <option>Data Science</option>
                          <option>Computer Networking</option>
                          <option>Products Design</option>
                   </select>
                   
              </div>

               <div className="input-group radio-group">
                    <label>Gender</label>
                    <div className="gender-box">
                           <span><input type="radio"  name="gender"/> Male</span>
                           <span><input type="radio" name="gender"/> Female</span>
                    </div>
                   
              </div>

                <div className="input-group">
                   <button type="submit">Submit</button>
                   
              </div>

              
        </form>
    )
}