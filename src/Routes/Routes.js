import { Routes, Route} from "react-router-dom";
import BookDetails from "../Components/BookDetails";
import BookList from "../Components/BookList";
import Login from "../Components/Login";
import PrivateComponent from "../Components/PrivateComponent";
import Signup from "../Components/Signup";

export default function Rout(){
    return(
      <Routes>

        <Route element={<PrivateComponent />} >
        <Route  path="/" element={<BookList />} />
        <Route  path="/add" element={<h1>Add Book</h1>} />
        <Route  path="/bookdetail/:id" element={<BookDetails />} />
        </Route>

        <Route  path="/signup" element={<Signup />} />
        <Route  path="/login" element={<Login />} />  
      </Routes>
    )
}