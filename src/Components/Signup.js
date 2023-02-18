import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

export default function Signup(){
    const [name, setName] = useState("")
    const [phone, setPhone]= useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const navigate= useNavigate()
  
    const handleSubmit=async()=>{
    let res= await fetch("https://garnet-messy-coconut.glitch.me/register", {
    method: "Post",
    body: JSON.stringify({title, name,phone,email,password}),
    headers:{
        "Content-Type": "application/json"
    }
    })
    res = await res.json()
    console.log(res)
    if(res){
       navigate("/")
    }
    localStorage.setItem("User", JSON.stringify(res))
    }

    return(
    <div className="signup">
        <h1>SIGN UP</h1>
        <select value={title} onChange={(e)=>setTitle(e.target.value)}>
            <option>--Title--</option>
            <option>Mr</option>
            <option>Mrs</option>
            <option>Miss</option>
        </select>
        <br/>
        <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <br/>
        <input type="number" placeholder="Enter Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        <br/>
        <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br/>
        <button onClick={handleSubmit}>SUBMIT</button>
    </div>
    )
}