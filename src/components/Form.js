import "./FormStyles.css";

import React, { useState } from 'react'

function Form() {

  const initial = {
    name:"",
    email:""
  }

 
  const [contact, setContact] = useState(initial) 
  
    const formdata=(e)=> {
      alert('hi')
      e.preventDefault()
      setContact(initial)
     
     console.log("name or emal info=",contact)
    }
    const readvalue=(e)=>{
      e.preventDefault()
      console.log(e.target.name+'-'+e.target.value)
      const {name,value} = e.target;
      setContact({...contact,[name]:value})
    }
  
  

  return (
    <div className="form">
      <form onSubmit={formdata}>
       <label>Your Name</label>
       <input type="text" value={contact.name} onChange={readvalue} name="name" id="name" placeholder="enter your name"></input>
       <label>Email</label>
       <input type="email" value={contact.email} onChange={readvalue} name="email" id="email" placeholder="enter your email"></input>
       <label>Subject</label>
       <input type="text" placeholder="enter subject"></input>
       <label>Message</label>
       <textarea rows="6" placeholder="Type your message here"/>
       <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form
