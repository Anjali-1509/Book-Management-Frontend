import { Navigate, Outlet } from "react-router-dom"

export default function PrivateComponent(){
   const auth = localStorage.getItem("Token")
   return auth ? <Outlet /> : <Navigate to="signup" />
}