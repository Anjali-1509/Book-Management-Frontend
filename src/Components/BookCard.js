import { Link } from "react-router-dom";

export default function BookCard({category,excerpt, releasedAt,title,reviews, img,id}){
    return(
        <div className="bookCard">
          <div>
          <h1 style={{color:"teal"}}>{title}</h1>
           <h4><Link className="detail" to={`/bookdetail/${id}`}>click here to know more about the book</Link></h4>
          </div>
          <img src={img}/>
        </div>
    )
}