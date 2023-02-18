import { useParams } from "react-router-dom"
import { useEffect } from 'react'
import {useState} from "react"
import Detail from "./Detail"

export default function BookDetails(){
    const [data, setData]= useState([])
    const param = useParams()
    console.log(param.id)

     useEffect(()=>{
      getData()  
     },[])

    const getData=async()=>{
    const token = localStorage.getItem("Token")
    let res = await fetch(`https://garnet-messy-coconut.glitch.me/books/${param.id}`,{
        method:  "get",
            headers: {
                "x-api-key":JSON.parse(token)
            }
    })
    res= await res.json()
    let arr=[]
    arr.push(res.data)
    setData(arr)
    console.log(arr)
    }

    return (
        <div>
        <h1>Book Details</h1>
        <div>
           {
            data.map((el)=>
            <Detail
               title={el.title}
               excerpt={el.excerpt}
               category={el.category}
               released={el.releasedAt}
               review={el.review}
               img={el.bookCover}
             />
            )
           } 
        </div>
        </div>
    )
}