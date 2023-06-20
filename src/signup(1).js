import { useState } from "react"
export default function Signup(){

     const [formData, setFormData] = useState({
        username:"",
        email:"",
        password1:"",
        password2:"",
        color:"",
        graduate:false,
        status:""
     })

     function handleChange(event){
        
          
           setFormData((prevFormData)=>{
                return {
                       ...prevFormData,
                       [event.target.name] : event.target.type === "checkbox" ? event.target.checked : event.target.value

                }
           })
     }

     function handleSubmit(event){
             event.preventDefault()
             console.log(formData)
     }


    return(
         <form onSubmit={handleSubmit}>
               <h1>Sign Up</h1>
               <input placeholder="username" name="username" type="text" onChange={handleChange}  value={formData.username}/>
               <input placeholder="email" name="email" type="email"  onChange={handleChange} value={formData.email}/>
               <input placeholder="password" name="password1" type="password"  onChange={handleChange} value={formData.password1}/>
               <input placeholder="confirm password" name="password2" type="password"  onChange={handleChange} value={formData.password2}/>
              <div>
              <label htmlFor="fav-color">select favorite color</label>
                        <select id="fav-color" name="color" value={formData.color} onChange={handleChange}>
                    <option></option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="Green">Green</option>
                    <option value="black">Black</option>
                    <option value="white">white</option>
               </select>
               <label>
               Are you a graduate ?
               <input type="checkbox" name="graduate" checked={formData.graduate} onChange={handleChange}/>
              </label>
              <div>
               student status
               <label>
                     Active
                <input type="radio" name="status" checked={formData.status === "active"} onChange={handleChange} value="active"/>
               </label>
               <label>
                     Rustication
                     <input type="radio" name="status" checked={formData.status === "rustication"} onChange={handleChange} value="rustication"/>
               </label>
               <label>
                     Alumi
                     <input type="radio" name="status" checked={formData.status === "alumi"} onChange={handleChange} value="alumi"/>
               </label>
              </div>
              </div>                   
               <button type="submit">Submit</button>
         </form>
    )

}