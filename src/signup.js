import { useState } from "react"

export default function Signup(){

     // const [formData, setFormData] = useState({
     //    username:"",
     //    email:"",
     //    password1:"",
     //    password2:"",
     //    color:"",
     //    graduate:false,
     //    status:""

     // })

     function handleChange(event){
        const{name,value,type,checked}=event.target
           setFormData((prevFormData)=>{
                return {
                       ...prevFormData,
                       [name] : type === "checkbox" ? checked : value

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
               <input placeholder="username" name="username" type="text" onInput={handleChange}  value={formData.username}/>
               <input placeholder="email" name="email" type="email"  onChange={handleChange} value={formData.email}/>
               <input placeholder="password" name="password1" type="password"  onInput={handleChange} value={formData.password1}/>
               <input placeholder="confirm password" name="password2" type="password"  onChange={handleChange} value={formData.password2}/>
               <div>
                        <label htmlFor="fav-color">Select your favorite color</label>
                        <select id="fav-color" name="color" value={formData.color} onChange={handleChange}>
                             <option value="" disabled>--</option>
                             <option value="blue">Blue</option>
                             <option  value="red">Red</option>
                             <option value="yellow">Yellow</option>
                             <option value="white">White</option>
                             <option value="black">Black</option>
                    
                        </select>

                        <label>
                             Are you a graduate?
                             <input type="checkbox" name="graduate" checked={formData.graduate} onChange={handleChange}/>
                        </label>

                         <div>
                              Student Status
                              <label>
                               Active
                             <input type="radio" name="status" checked={formData.status === "active"} onChange={handleChange} value="active" />
                             </label>

                              <label>
                               Rusticated
                             <input type="radio" name="status"  checked={formData.status === "rusticated"} onChange={handleChange} value="rusticated" />
                             </label>

                              <label>
                               Alumni
                             <input type="radio" name="status" checked={formData.status === "alumni"} onChange={handleChange}
                             value="alumni" />
                           
                             </label>
                         </div>
               </div>
               <button type="submit">Submit</button>
         </form>
    )

}