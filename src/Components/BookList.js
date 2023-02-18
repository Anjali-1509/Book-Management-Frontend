import { useEffect } from 'react';
import { useState } from 'react';
import BookCard from './BookCard';

export default function BookList(){
const [data, setData]= useState([])

    useEffect(()=>{
       getData()
    },[])

    const getData=async()=>{
    let token = localStorage.getItem("Token")
    let res= await fetch("https://garnet-messy-coconut.glitch.me/books",{
        method: "get",
        headers: {
            "x-api-key":JSON.parse(token)
        }
    })
    res= await res.json()
    setData(res.data)
    console.log(res.data)
    }
    return(
        <div>
        <h1>Book List</h1>
           <div>
            {
             data.map((el)=>
              <BookCard 
                category={el.category}
                excerpt={el.excerpt}
                releasedAt={el.releasedAt}
                title={el.title}
                reviews={el.reviews}
                img={el.bookCover}
                id={el._id}
              />
             )
            }
           </div>
        </div>
    )
}