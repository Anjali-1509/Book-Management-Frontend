import {Link,useNavigate} from "react-router-dom"

export default function Navbar(){
  let auth = localStorage.getItem("Token")
  const navigate= useNavigate()
  const logout=()=>{
    localStorage.clear()
    navigate("/login")
  }

    return(
        <div className="Navbar">
          <h3>Book Mangement</h3>
         {auth ? <ul>
            <li><Link to="/">Books</Link></li>
            <li><Link to="/add">Add Book</Link></li>
            <li><Link onClick={logout} to="/login">Logout</Link></li>
          </ul>
          :
          <ul>
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
         }
        </div>
    )
}