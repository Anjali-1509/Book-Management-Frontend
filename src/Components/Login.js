import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';

export default function Login(){
     const  [email, setEmail] = useState("")
     const [ password, setPassword]= useState("")
     const navigate= useNavigate()
    
     useEffect(()=> {
        const auth=localStorage.getItem('Token')
        if(auth){
         navigate("/")
        }
       },[])
     
    const handleSubmit=async()=>{
    let res = await fetch("https://garnet-messy-coconut.glitch.me/login", {
      method : "Post",
      body: JSON.stringify({email,password}),
      headers:{
        "Content-Type" :"application/json"
      }
    })
    res = await res.json()
    console.log(res)
    if(res.data){
    localStorage.setItem("Token",JSON.stringify(res.data)) 
    navigate("/")
    }
      else{
        alert("Please Enter Correct Details")
      }
     }

    return(
    <div className="login">
        <h1>LOGIN</h1>
        <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br/>
        <button onClick={handleSubmit}>SUBMIT</button>
    </div>
    )
}