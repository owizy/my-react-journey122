import "./signup.css"
import {useState} from "react"

export default function Signup(){

    const[formData, setFormData] = useState({
                 username:"",
                 email:"",
                 password1:"",
                 password2:"",
                 color:"",
                 employment: true,
                 gender:""
    })
    function handleChange(event){
         setFormData((prevFormData)=>{
               return{
                      ...prevFormData,
                      [event.target.name]:event.target.type === "checkbox" ? event.target.checked : event.target.value
                      
               }
         })  
    }


       function handleSubmit(event){
             event.preventDefault();
             console.log(formData)

        }
    return(
        <form onSubmit={handleSubmit}>
            <h1>Signup Form</h1>
            <input placeholder="username" name="username" type="text"
            onChange={handleChange} value={formData.username}/>
              <input placeholder="email" name="email" type="email"
            onChange={handleChange} value={formData.email}/>

            <input placeholder="password" name="password1" type="password"
            onChange={handleChange} value={formData.password1}/>

            <input placeholder="password" name="password2" type="password"
            onChange={handleChange} value={formData.password2}/>

             <label className="select-box">
                Select your favorite color
                  <select  name="color" value={formData.color} onChange={handleChange}>
                 <option  value="">--</option>
                 <option  value="blue">Blue</option>
                 <option value="red">Red</option>
                 <option value="green">Green</option>
                 <option value="yellow">Yellow</option>

             </select>
             
             </label>
           
              <label>
                Are you employable?
                <input  type="checkbox" name="employment" onChange={handleChange} checked={formData.employment}/>
              </label>

              <div>
                   <small>Gender:</small>
                   <label>
                       Male <input name="gender" type="radio" value="male" onChange={handleChange} checked={formData.gender === "male" }/>
                   </label>

                   <label>
                       Female <input name="gender" type="radio" value = "female" onChange={handleChange} checked={formData.gender === "female"}/>
                   </label>
              </div>

            <button type="submit">Submit</button>
        </form>
    )
}